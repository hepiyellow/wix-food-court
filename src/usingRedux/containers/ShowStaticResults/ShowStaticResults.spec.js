import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import Checkbox from 'wix-style-react/Checkbox';
import {mountWithMockStore} from '../../../../test/test-helper';

import {checkboxTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';
import ShowStaticResults from './ShowStaticResults';

describe('ShowStaticResults', () => {
  // let wrapper;
  // afterEach(() => wrapper.detach());
  it('test CheckBox TestKit', () => {
    const dataHook = 'myCheckBoxHook';
    const wrapper = mount(
      <Checkbox
        dataHook={dataHook}
        checked={false}
        onChange={function (_ref2) {
          // TODO: use spy to see if this is called

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

  it('renders checkbox', () => {
    const wrapper = mountWithMockStore(
      <ShowStaticResults/>
    );
    expect(wrapper.find(Checkbox).length).to.eq(1);

    // const checkBoxTestKit = checkboxTestkitFactory({wrapper, dataHook: DATA_HOOKS.staticDataCheckbox});
    // expect(checkBoxTestKit.exists()).to.be.true;
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());
    // checkBoxTestKit.click();
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());

  });

});
