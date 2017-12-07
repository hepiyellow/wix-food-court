import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'wix-style-react/DataTable';

import loggerFactory from 'debug-logger';
const log = loggerFactory('DataDisplay');

// Consider putting all data hooks of App in one place
export const DATA_HOOKS = {
  dataTable: 'myDataTable'
};

/**
 * DataDisplay component display the data (restaurant list).
 * For now it is a DataTable, but it could display in another format.
 */
const DataDisplay = props => {
  log.debug('render(): props=', props);
  return (
    <DataTable
      dataHook={DATA_HOOKS.dataTable}
      data={props.data}
      columns={[
        {title: 'Row Number', render: (row, rowNum) => '#' + (rowNum + 1), width: '20%', minWidth: '75px', important: true},
        {title: 'Name', render: row => <span>{row.title}</span>, width: '40%', minWidth: '100px'},
        {title: 'Phone', render: row => <span>{row.phone}</span>, width: '40%', minWidth: '100px'}
      ]}
      />
  );
};

DataDisplay.propTypes = {
  data: PropTypes.array.isRequired
};

export default DataDisplay;
