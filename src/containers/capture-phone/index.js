import React from 'react-native';
import { connect } from 'react-redux';

//import VerifyPhoneContainer from '../../containers/verify-phone';

import {
  VERIFY_PHONE,
} from '../../constants/routes';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
} = React;

class CapturePhone extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Enter Mobile Number
          </Text>
        </View>
        <View style={styles.inputContainer}>
          
        </View>
      </View>
    );
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(CapturePhone);