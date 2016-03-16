import React from 'react-native';
import { connect } from 'react-redux';

import {
  changeCode,
} from '../../actions/user';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} = React;

class VerifyPhone extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Enter you verification code
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={this._onChange.bind(this)}
            value={this.props.user.code}
            placeholder='******'
            maxLength={6}
            autoFocus={true}
          />
        </View>
      </View>
    );
  }

  _onChange(code) {
    this.props.dispatch(changeCode(code));
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(VerifyPhone);