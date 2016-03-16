import React from 'react-native';
import { connect } from 'react-redux';

import {
  changeSecret,
} from '../../actions/user';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} = React;

class CaptureSecret extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Enter Secret Set Code
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={this._onChange.bind(this)}
            value={this.props.user.secret}
            placeholder='******'
            autoFocus={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._onVerify.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Check Code
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onChange(secret) {
    this.props.dispatch(changeSecret(secret));
  }

  _onVerify() {
    console.log('test');
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(CaptureSecret);