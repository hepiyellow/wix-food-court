import React from 'react';
import update from 'immutability-helper';
import autobind from 'autobind-decorator';


import s from './App.scss';
import SearchBar from '../../components/SearchBar';
import SearchResults from '../SearchResults';

// TODO: make this a functional component. Move all state to redux
class App extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2>{'Food Court! (Redux)'}</h2>
        </div>
        <div className={s.searchPane}>
          <SearchBar/>
        </div>
        <div className={s.searchResultsPane}>
          <SearchResults/>
        </div>
      </div>
    );
  }
  // This is not in use, move this to a redux async action
  @autobind
  fireSearch(searchTerm) {
    const self = this;
    this.setState({
      filterStr: '',
      searchTerm,
      searchResults: [],
      searchInProgress: true,
      showStaticData: false
    });

    fetch('https://spice-prod.appspot.com/v1.1', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        type: 'search',
        filter: {distributorId: 'food.co.il'},
        query: searchTerm
      })
    }).then(r => r.json())
      .then(r => {
        console.log('Got Response: ', r);
        self.setState(update(self.state, {
          searchInProgress: {$set: false},
          searchResults: {$set: r}
        }));
      }
      )
      .catch(e => {
        console.log(e);
        self.setState(update(self.state, {
          searchInProgress: {$set: false},
        }));
      });
  }
}

export default App;
