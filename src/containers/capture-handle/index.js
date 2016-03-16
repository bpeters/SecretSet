import React from 'react-native';
import { connect } from 'react-redux';

import {
  changeHandle,
} from '../../actions/user';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} = React;

class CapturePhone extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Enter Handle
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='twitter'
            onChangeText={this._onChange.bind(this)}
            value={this.props.user.handle}
            placeholder='handle'
            maxLength={15}
            autoFocus={true}
          />
        </View>
      </View>
    );
  }

  _onChange(handle) {
    this.props.dispatch(changeHandle(handle));
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(CapturePhone);