import React from 'react-native';
import { connect } from 'react-redux';

import CapturePhoneContainer from '../../containers/capture-phone';

import {
  CAPTURE_PHONE,
} from '../../constants/routes';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
} = React;

class Landing extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.branding}>

        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this._onSignup.bind(this)}>
            <View style={styles.signup}>
              <Text style={styles.signupText}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onLogin.bind(this)}>
            <View style={styles.login}>
              <Text style={styles.loginText}>
                Log In
              </Text>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    );
  }

  _onSignup() {
    this.props.navigator.push({
      component: CapturePhoneContainer,
      type: CAPTURE_PHONE,
      isNew: true,
    });
  }

  _onLogin() {
    this.props.navigator.push({
      component: CapturePhoneContainer,
      type: CAPTURE_PHONE,
    });
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(Landing);