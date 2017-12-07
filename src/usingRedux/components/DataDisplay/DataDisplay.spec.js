import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import DataDisplay, {DATA_TABLE_DATA_HOOK} from './DataDisplay';
import DataTable from 'wix-style-react/DataTable';
import {dataTableTestkitFactory as enzymeDataTableTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';



describe('DataDisplay', () => {
  // let wrapper;
  // afterEach(() => wrapper.detach());

  it.skip('failing with TypeError: Cannot read property querySelectorAll of undefined. Happens only when data=[], I think it is a Wix bug.', () => {
    const props = {
      data: [
        // { title: 'a', phone: '123' },
        // { title: 'b', phone: '12344' }
      ],
      columns: [
        {title: 'Row Number', render: (row, rowNum) => '#' + (rowNum + 1), width: '20%', minWidth: '75px', important: true},
        {title: 'Name', render: row => <span>{row.title}</span>, width: '40%', minWidth: '100px'},
        {title: 'Phone', render: row => <span>{row.phone}</span>, width: '40%', minWidth: '100px'}
      ]
    };
    const dataHook = DATA_TABLE_DATA_HOOK;
    const wrapper = mount(<div><DataTable {...props} dataHook={dataHook}/></div>);
    const testkit = enzymeDataTableTestkitFactory({wrapper, dataHook});
    expect(testkit.getRowsCount()).to.eq(2);
  });

  it('Renders DataTable with correct num of rows', () => {
    const searchResultsProps = {
      data: [
        {title: 'a', phone: '123'},
        {title: 'b', phone: '12344'}
      ],
      updateFilter: () => { },
      fireSearch: () => { },
      showStaticData: false,
      setShowStaticData: () => { }
    };
    const dataHook = DATA_TABLE_DATA_HOOK;
    const wrapper = mount(<div><DataDisplay {...searchResultsProps}/></div>);
    const testkit = enzymeDataTableTestkitFactory({wrapper, dataHook});
    expect(testkit.getRowsCount()).to.eq(2);
  });

});
