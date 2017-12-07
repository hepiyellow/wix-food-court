import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import SearchResults from './SearchResults';
import DataDisplay from '../../components/DataDisplay';

describe('SearchResults', () => {
  // let wrapper;
  // afterEach(() => wrapper.detach());

  it('Renders a DataDisplay', () => {
    const wrapper = mount(<div><SearchResults
      data={[
        {title: 'a', phone: '123'},
        {title: 'b', phone: '12344'}
      ]}
      /></div>);

    expect(wrapper.find(DataDisplay).length).to.be.eq(1);
  });

  it.skip('filters data according to filter string', () => {
    const data = [
      {title: 'abc', phone: '123'},
      {title: 'afg', phone: '456'}
    ];
    const wrapper = mount(<div>
      <SearchResults
        data={data}
        filter="a"
        />
    </div>);

    expect(wrapper.find(DataDisplay).length()).to.be.eq(1);
    //TODO: finish this

    // expect(App.getFilteredData(data, 'rer', 'title').length).to.eq(0);
    // expect(App.getFilteredData(data, 'ab', 'title').length).to.eq(1);
    // expect(App.getFilteredData(data, 'a', 'title').length).to.eq(2);
  });


});
