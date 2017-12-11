import React from 'react';
import {expect} from 'chai';
// import {mount} from 'enzyme';

import {mountWithMockStore} from '../../../../test/test-helper';
import SearchBar, {
  // DATA_HOOKS
} from './SearchBar';
import Search from 'wix-style-react/Search';

// import {searchTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

describe('SearchBar', () => {
  // let wrapper;
  // afterEach(() => wrapper.detach());

  it.skip('renders Search input', () => {
    const wrapper = mountWithMockStore(
      <SearchBar/>
    );
    expect(wrapper.find(Search).length).to.eq(1);
  });

});
