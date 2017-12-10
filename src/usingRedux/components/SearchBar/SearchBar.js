import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import {connect} from 'react-redux';
import * as Actions from '../../actions';
import {bindActionCreators} from 'redux';

import s from './SearchBar.scss';
import Search from 'wix-style-react/Search';
import Checkbox from 'wix-style-react/Checkbox';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchBar');

export const DATA_HOOKS = {
  staticDataCheckbox: 'staticDataCheckbox'
};


class SearchBar extends React.Component {

  @autobind
  handleManuallyInputSearch(inputValue) {
    this.props.fireSearch(inputValue);
  }

  @autobind
  handleCheckboxChange(_ref2) {
    const isChecked = !!_ref2.target.checked;
    this.props.setShowStaticData(isChecked);
  }

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
          <Checkbox
            dataHook={DATA_HOOKS.staticDataCheckbox}
            checked={this.props.showStaticData}
            onChange={this.handleCheckboxChange}
            >
            Show Static Data
          </Checkbox>
        </div>
      </div>
    );
  }

}

SearchBar.propTypes = {
  showStaticData: PropTypes.bool.isRequired,
  // This is mapped by Redux connect
  setShowStaticData: PropTypes.func.isRequired,
  fireSearch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  // Maybe no need for state
  return {
    showStaticData: state.dataDisplay.showStaticData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fireSearch: bindActionCreators(Actions.search.fireSearch, dispatch),
    setShowStaticData: bindActionCreators(Actions.display.setShowStaticData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
