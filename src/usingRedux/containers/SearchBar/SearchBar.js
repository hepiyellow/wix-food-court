import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fireSearch} from '../../actions/searchActions';

import s from './SearchBar.scss';
import Search from 'wix-style-react/Search';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchBar');

class SearchBar extends React.Component {
  render() {
    log.debug('render(): props=', this.props);
    // TODO: implement recent searchTerms update
    const recentSearchTerms = ['בית', 'חומוס'];

    const options = recentSearchTerms.map((item, index) => {
      return {
        id: index,
        value: item
      };
    });

    //TODO: put inputs beside one another
    return (
      <div >
        <div className={s.searchInput}>
          <Search
            id="search"
            closeOnSelect={false}
            onManuallyInput={this.handleManuallyInputSearch}
            options={options}
            placeholder="Search Term"
            />
        </div>
      </div>
    );
  }

  @autobind
  handleManuallyInputSearch(inputValue) {
    this.props.fireSearch(inputValue);
  }
}

SearchBar.propTypes = {
  fireSearch: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    fireSearch: bindActionCreators(fireSearch, dispatch),
  };
}

export default connect(() => {}, mapDispatchToProps)(SearchBar);
