import React from 'react-native';
import { connect } from 'react-redux';

import {
  changeSecret,
  verifySecret,
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

  render() {
    let length = this.props.secret ? this.props.secret.length : 0;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Enter your secret set code
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={this._onChange.bind(this)}
            value={this.props.secret}
            placeholder='******'
            maxLength={6}
            autoFocus={true}
          />
        </View>
        {length === 6 ? this._renderButton() : null}
        {this.props.loading ? this._renderLoading() : null}
      </View>
    );
  }

  _renderButton() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this._onVerify.bind(this)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Check Code
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  _renderLoading() {
    return null;
  }

  _onChange(secret) {
    this.props.dispatch(changeSecret(secret));
  }

  _onVerify() {
    this.props.dispatch(verifySecret(this.props.secret, this.props.navigator));
  }

}

function select(state) {
  return {
    secret: state.user.secret,
    loading: state.user.loading,
  };
}

export default connect(select)(CaptureSecret);