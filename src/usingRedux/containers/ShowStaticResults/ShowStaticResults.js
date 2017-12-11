import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setShowStaticData} from '../../actions/displayActions';

import Checkbox from 'wix-style-react/Checkbox';

export const DATA_HOOKS = {
  staticDataCheckbox: 'staticDataCheckbox'
};

class ShowStaticResults extends React.Component {
  render() {
    return (
      <Checkbox
        dataHook={DATA_HOOKS.staticDataCheckbox}
        checked={this.props.showStaticData}
        onChange={this.handleCheckboxChange}
        >
      Show Static Data
    </Checkbox>
    );
  }
  @autobind
  handleCheckboxChange(_ref2) {
    const isChecked = !!_ref2.target.checked;
    this.props.setShowStaticData(isChecked);
  }
}

ShowStaticResults.propTypes = {
  // This is mapped by Redux
  showStaticData: PropTypes.bool.isRequired,
  setShowStaticData: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    showStaticData: state.dataDisplay.showStaticData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setShowStaticData: bindActionCreators(setShowStaticData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowStaticResults);

