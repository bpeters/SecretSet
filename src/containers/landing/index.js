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

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onSignup.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Join a Set
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
    });
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(Landing);