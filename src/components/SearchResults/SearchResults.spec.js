import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import SearchResults from './SearchResults';
import DataTable from 'wix-style-react/DataTable';
// import {dataTableTestkitFactory} from 'wix-style-react/testkit/enzyme';

describe('SearchResults', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('renders a DataTable input', () => {
    wrapper = mount(
      <SearchResults
        data={[]}
        updateFilter={() => {}}
        fireSearch={() => {}}
        showStaticData={false}
        setShowStaticData={() => {}}
        />,
       {attachTo: document.createElement('div')}
    );
    expect(wrapper.find(DataTable).length).to.eq(1);

    // const dataHook = 'dataTable';
    // const testKit = dataTableTestkitFactory({wrapper, dataHook});
    // expect(testKit.getRowsCount()).to.be.eq(0);
  });

});
