import React from 'react';
import PropTypes from 'prop-types';
import DataDisplay from '../../components/DataDisplay';

import loggerFactory from 'debug-logger';
const log = loggerFactory('SearchResults');

const SearchResults = props => {
  log.debug('render(): props=', props);
  return (
    <DataDisplay
      data={props.data}
      />
  );
};

SearchResults.propTypes = {
  data: PropTypes.array.isRequired
};

export default SearchResults;
