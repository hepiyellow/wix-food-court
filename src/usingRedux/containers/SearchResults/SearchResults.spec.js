import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import SearchResults from './SearchResults';
import DataDisplay from '../../components/DataDisplay';

describe('SearchResults', () => {
  let wrapper;
  afterEach(() => wrapper.detach());

  it('Renders a DataDisplay', () => {
    const wrapper = mount(<div><SearchResults
      data={[
        {title: 'a', phone: '123'},
        {title: 'b', phone: '12344'}
      ]}
      /></div>);

    expect(wrapper.find(DataDisplay).length()).to.be.eq(1);
  });


});
