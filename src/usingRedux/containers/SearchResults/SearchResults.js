import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions';

import Search from 'wix-style-react/Search';
import s from './SearchResults.scss';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchResults');

import DataDisplay from '../../components/DataDisplay';
/**
* Creates a filtered data array, selecting only rows in which the value of
* the property named [filedName] includes the filter string.
* @param {*} data Array of items (objects). An object must have a property named fieldName.
* @param {*} filterStr the filter string
* @param {*} fieldName the property to filter on.
*/
function getFilteredData(data, filterStr, fieldName) {
  return data.filter(row => {
    return row[fieldName].includes(filterStr);
  });
}

class SearchResults extends React.Component {
  render() {
    log.debug('render(): props=', this.props);
    const data = this.props.data;
    const options = data.map((item, index) => {
      return {
        id: index,
        value: item.title
      };
    });
    const filteredData = getFilteredData(data, this.props.filter, 'title');

    if (data.length === 0) {
      return (
        <div>No Data</div>
      );
    } else {
      return (
        <div>
          <div className={s.filterInput}>
            <Search
              id="filter"
              closeOnSelect={false}
              onManuallyInput={this.handleManuallyInputFilter}
              options={options}
              placeholder="Filter By Name"
              />
          </div>
          <DataDisplay
            data={filteredData}
            />
        </div>
      );
    }

  }

  @autobind
  handleManuallyInputFilter(inputValue) {
    this.props.updateFilter(inputValue);
  }
}

SearchResults.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  // This is a Redux mapped prop. Eslint forces it to be here.
  updateFilter: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filter: state.dataDisplay.filter
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateFilter: bindActionCreators(Actions.setFilterActionCreator, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

