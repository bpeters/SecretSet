import React from 'react-native';
import { connect } from 'react-redux';

import {
  setPhone,
  verifyCode,
  setHandle,
} from '../../actions/user';

import {
  LANDING,
  CAPTURE_PHONE,
  VERIFY_PHONE,
  CAPTURE_HANDLE,
  CAPTURE_SECRET,
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
        return this._renderText('Next', this._toHandle.bind(this), this.props.user.code);
      case CAPTURE_HANDLE:
        return this._renderText('Done', this._toSecret.bind(this), this.props.user.handle);
      case CAPTURE_SECRET:
        return this._renderText('Go', this._toSet.bind(this), this.props.user.secret);
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

  _toHandle() {
    this.props.dispatch(verifyCode(this.props.user.code, this.props.navigator));
  }

  _toSecret() {
    this.props.dispatch(setHandle(this.props.user.handle, this.props.navigator));
  }

  _toSet() {
    console.log('test');
  }
}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(RightButton);