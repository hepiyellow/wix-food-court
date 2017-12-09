import React from 'react';
import autobind from 'autobind-decorator';
import Button from 'wix-style-react/Button';

import AppUsingState from './usingReactState/containers/App';
import AppUsingRedux from './usingRedux/AppUsingRedux';

const Mode = {
  REACT_STATE: 'REACT_STATE',
  REDUX: 'REDUX'
};
export default class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: Mode.REACT_STATE
    };
  }
  render() {
    let content;
    switch (this.state.mode) {
      case Mode.REACT_STATE: {
        content = <AppUsingState/>;
        break;
      }
      case Mode.REDUX: {
        content = <AppUsingRedux/>;
        break;
      }
      default: {
        throw new Error('Illegal mode:' + this.state.mode);
      }
    }

    return (
      <div>
        <Button
          onClick={() => this.setStateManagmentMode(Mode.REACT_STATE)}
          > ReactState </Button>
        <Button
          onClick={() => this.setStateManagmentMode(Mode.REDUX)}
          > Redux </Button>
        {content}
      </div>
    );
  }

  @autobind
  setStateManagmentMode(mode) {
    this.setState({mode});
  }
}
