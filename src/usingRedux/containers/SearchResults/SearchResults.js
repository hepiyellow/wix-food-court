import React from 'react';
import PropTypes from 'prop-types';
import DataDisplay from '../../components/DataDisplay';

import {connect} from 'react-redux';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchResults');

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
    const filteredData = getFilteredData(this.props.data, this.props.filter, 'title');
    return (
      <DataDisplay
        data={filteredData}
        />
    );
  }
}

SearchResults.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    filter: state.dataDisplay.filter
  };
}

export default connect(mapStateToProps)(SearchResults);

