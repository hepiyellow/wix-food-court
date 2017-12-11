import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import SearchBar, {DATA_HOOKS} from './SearchBar';
import Search from 'wix-style-react/Search';
import Checkbox from 'wix-style-react/Checkbox';

import {checkboxTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

describe('SearchBar (Using ReactState)', () => {
  // let wrapper;
  // afterEach(() => wrapper.detach());

  it('test CheckBox TestKit', () => {
    const dataHook = 'myCheckBoxHook';
    const wrapper = mount(
      <Checkbox
        dataHook={dataHook}
        checked={false}
        onChange={function (_ref2) {
          // console.log('onChange(): ', _ref2.target.checked ? 'Checked' : 'Unchecked');
        }}
        >
        My CheckBox
      </Checkbox>
    );

    const checkBoxTestKit = checkboxTestkitFactory({wrapper, dataHook});
    expect(checkBoxTestKit.exists()).to.be.true;
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());
    // console.log('checkBoxTestKit.click()');
    checkBoxTestKit.click();
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());
  });

  it.skip('renders 2 Search input and checkbox', () => {
    const wrapper = mount(
      <SearchBar
        data={[]}
        updateFilter={() => {}}
        fireSearch={() => {}}
        showStaticData={false}
        setShowStaticData={() => {}}
        />
      //   ,
      //  {attachTo: document.createElement('div')}
    );
    expect(wrapper.find(Search).length).to.eq(2);

    const checkBoxTestKit = checkboxTestkitFactory({wrapper, dataHook: DATA_HOOKS.staticDataCheckbox});
    expect(checkBoxTestKit.exists()).to.be.true;
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());
    checkBoxTestKit.click();
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());

  });

});
