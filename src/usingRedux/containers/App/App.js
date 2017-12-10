import React from 'react';

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
}

export default App;
