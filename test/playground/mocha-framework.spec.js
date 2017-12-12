import {expect} from 'chai';

describe('#1 Global document object', () => {
  afterEach(() => {
    // delete document.erez;
  });
  it('#1 first case adds property to document.', () => {
    document.myTestProp = 'myTestPropValue';
  });
  it('#2 second case sees the added property.', () => {
    expect(document).to.have.property('myTestProp');
  });
});

describe('#2 Global document object', () => {
  it('#3 3rd case in seperate describe block, has the same global document instance.', () => {
    expect(document).to.have.property('myTestProp');
  });
});
