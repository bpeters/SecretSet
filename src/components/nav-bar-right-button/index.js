import React from 'react-native';
import { connect } from 'react-redux';

import {
  setPhone,
  verifyCode,
} from '../../actions/user';

import {
  LANDING,
  CAPTURE_PHONE,
  VERIFY_PHONE,
  CAPTURE_HANDLE,
  CAPTURE_SECRET,
  SUCCESS,
} from '../../constants/routes';

import styles from './styles.js';

let {
  TouchableOpacity,
  Text,
} = React;

class RightButton extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case CAPTURE_PHONE:
        return this._renderText('Next', this._toVerify.bind(this), this.props.user.phone);
      case VERIFY_PHONE:
        return this._renderText('Verify', this._toSuccess.bind(this), this.props.user.code);
      default:
        return null;
    }
  }

   _renderText(text, action, isReady) {
    return (
      <TouchableOpacity
        onPress={() => isReady ? action() : null}
        style={styles.button}
      >
        <Text style={[styles.text, (isReady ? styles.ready : null)]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  _toVerify() {
    this.props.dispatch(setPhone(this.props.user.phone, this.props.navigator));
  }

  _toSuccess() {
    this.props.dispatch(verifyCode(this.props.user.code, this.props.navigator));
  }
}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(RightButton);