import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

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
  handleManuallyInputFilter(inputValue) {
    this.props.updateFilter(inputValue);
  }

  @autobind
  handleManuallyInputSearch(inputValue) {
    this.props.fireSearch(inputValue);
  }

  @autobind
  handleCheckboxChange(_ref2) {
    const isChecked = !!_ref2.target.checked;
    log.debug('handleCheckboxChange(): with isChecked=', isChecked);
    this.props.setShowStaticData(isChecked);
  }

  render() {
    log.debug('render(): props=', this.props);

    const options = this.props.data.map((item, index) => {
      return {
        id: index,
        value: item.title
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
        <div className={s.filterInput}>
          <Search
            id="filter"
            closeOnSelect={false}
            onManuallyInput={this.handleManuallyInputFilter}
            options={options}
            placeholder="Filter By Name"
            />
        </div>
      </div>
    );
  }

}

SearchBar.propTypes = {
  data: PropTypes.array.isRequired,
  showStaticData: PropTypes.bool.isRequired,
  setShowStaticData: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
  fireSearch: PropTypes.func.isRequired
};


export default SearchBar;
