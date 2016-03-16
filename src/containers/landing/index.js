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
  Image,
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
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this._onSignup.bind(this)}>
            <View style={styles.signup}>
              <Text style={styles.signupText}>
                Start
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

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(Landing);