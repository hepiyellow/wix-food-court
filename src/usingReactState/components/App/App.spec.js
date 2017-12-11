import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';
import SearchBar, {DATA_HOOKS as searchBarDataHooks} from '../SearchBar';
import SearchResults, {DATA_HOOKS as searchResultsDataHooks} from '../SearchResults';

import Checkbox from 'wix-style-react/Checkbox';

import {dataTableTestkitFactory, checkboxTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

describe('App Using ReactState', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('renders a title correctly', () => {
    wrapper = mount(
      <App/>, {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('h2').length).to.eq(1);
  });

  it('filters data according to filter string', () => {
    const data = [
      {title: 'abc'},
      {title: 'afg'}
    ];
    expect(App.getFilteredData(data, 'rer', 'title').length).to.eq(0);
    expect(App.getFilteredData(data, 'ab', 'title').length).to.eq(1);
    expect(App.getFilteredData(data, 'a', 'title').length).to.eq(2);
  });

  it('renders SearchBar and SearchResults', () => {
    wrapper = mount(
      <App/>, {attachTo: document.createElement('div')}
    );
    expect(wrapper.find(SearchBar)).to.have.length(1);
    expect(wrapper.find(SearchResults)).to.have.length(1);

  });

  // Skipping since checkBox.click() doesn't work
  it.skip('shows static data', () => {
    const wrapper = mount(
      <App/>
      , {attachTo: document.createElement('div')}
    );
    const staticDataCheckboxTestKit = checkboxTestkitFactory({
      wrapper: wrapper.find(Checkbox),
      dataHook: searchBarDataHooks.staticDataCheckbox
    });
    // console.log('testkit= ', staticDataCheckboxTestKit);
    // console.log('isChecked = ', staticDataCheckboxTestKit.isChecked());
    staticDataCheckboxTestKit.exists();
    staticDataCheckboxTestKit.click(); //TODO: this doesn't work ...?
    // console.log('isChecked = ', staticDataCheckboxTestKit.isChecked());


    // console.log('wrapper= ', wrapper);
    const dataHook = searchResultsDataHooks;
    const dataTableTestKit = dataTableTestkitFactory({wrapper, dataHook});

   // TODO: This line fails with (when importing from wix-style-react/dist/testkit/enzyme):
    //TypeError: Cannot read property 'querySelectorAll' of undefined
    expect(dataTableTestKit.getRowsCount()).to.be.eq(10);

  });


});
