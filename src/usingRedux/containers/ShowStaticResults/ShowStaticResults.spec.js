import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import Checkbox from 'wix-style-react/Checkbox';
import {mountWithMockStore} from '../../../../test/test-helper';

import {checkboxTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';
import ShowStaticResults from './ShowStaticResults';

describe('ShowStaticResults', () => {
  // let wrapper;
  // afterEach(() => wrapper.detach());
  it.skip('test CheckBox TestKit', () => {
    const dataHook = 'myCheckBoxHook';
    const handleChange = sinon.spy();
    const wrapper = mount(
      <Checkbox
        dataHook={dataHook}
        checked={false}
        onChange={handleChange}
        >
        My CheckBox
      </Checkbox>
    );

    const checkBoxTestKit = checkboxTestkitFactory({wrapper, dataHook});
    expect(checkBoxTestKit.exists()).to.be.true;
    // console.log('checkBoxTestKit.isChecked() = ', checkBoxTestKit.isChecked());
    // console.log('checkBoxTestKit.click()');
    handleChange.called.should.equal.false;
    checkBoxTestKit.click();
    handleChange.called.should.equal.true;
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
