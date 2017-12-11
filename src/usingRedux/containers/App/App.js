import React from 'react';

import s from './App.scss';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

// TODO: can we make this a functional component and still have redux work?
class App extends React.Component {

  render() {
    this.props;
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
}

export default App;
