import React from 'react';
import PropTypes from 'prop-types';

import s from './SearchBar.scss';
import Search from 'wix-style-react/Search';
import Checkbox from 'wix-style-react/Checkbox';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchBar');

export const DATA_HOOKS = {
  staticDataCheckbox: 'staticDataCheckbox'
};

const SearchBar = props => {
  log.debug('render(): props=', props);
  // ESLint forces handler to be prefixed by 'handle'
  const handleManuallyInputFilter = inputValue => {
    props.updateFilter(inputValue);
  };

  // ESLint forces handler to be prefixed by 'handle'
  const handleManuallyInputSearch = inputValue => {
    props.fireSearch(inputValue);
  };

  const handleCheckboxChange = _ref2 => {
    const isChecked = !!_ref2.target.checked;
    log.debug('handleCheckboxChange(): with isChecked=', isChecked);
    props.setShowStaticData(isChecked);
  };

  const options = props.data.map((item, index) => {
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
          onManuallyInput={handleManuallyInputSearch}
          options={options}
          placeholder="Search Term"
          />
        <Checkbox
          dataHook={DATA_HOOKS.staticDataCheckbox}
          checked={props.showStaticData}
          onChange={handleCheckboxChange}
          >
          Show Static Data
        </Checkbox>
      </div>
      <div className={s.filterInput}>
        <Search
          id="filter"
          closeOnSelect={false}
          onManuallyInput={handleManuallyInputFilter}
          options={options}
          placeholder="Filter By Name"
          />
      </div>
    </div>
  );

};

SearchBar.propTypes = {
  data: PropTypes.array.isRequired,
  showStaticData: PropTypes.bool.isRequired,
  setShowStaticData: PropTypes.func.isRequired,
  updateFilter: PropTypes.func.isRequired,
  fireSearch: PropTypes.func.isRequired
};


export default SearchBar;
