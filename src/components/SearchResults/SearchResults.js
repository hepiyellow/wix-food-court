import React from 'react';
import PropTypes from 'prop-types';
import DataTable from 'wix-style-react/DataTable';

export const DATA_TABLE_DATA_HOOK = 'myDataTable';
const SearchResults = props => {
  return (
    <DataTable
      dataHook={DATA_TABLE_DATA_HOOK}
      data={props.data}
      columns={[
        {title: 'Row Number', render: (row, rowNum) => '#' + (rowNum + 1), width: '20%', minWidth: '75px', important: true},
        {title: 'Name', render: row => <span>{row.title}</span>, width: '40%', minWidth: '100px'},
        {title: 'Phone', render: row => <span>{row.phone}</span>, width: '40%', minWidth: '100px'}
      ]}
      />
  );
};

SearchResults.propTypes = {
  data: PropTypes.array.isRequired
};

export default SearchResults;
