import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import AppUsingRedux from './AppUsingRedux';
import App from './containers/App';

describe('AppUsingRedux', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it.skip('renders a title correctly', () => {
    wrapper = mount(
      <AppUsingRedux/>, {attachTo: document.createElement('div')}
    );
    expect(wrapper.find(App).length).to.eq(1);
    // check that App as the store prop
  });
});
