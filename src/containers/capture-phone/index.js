import React from 'react-native';
import { connect } from 'react-redux';

import {
  changePhone,
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
            Enter your mobile number
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            keyboardType='phone-pad'
            onChangeText={this._onChange.bind(this)}
            value={this.props.user.phone}
            placeholder='(***) *** - ****'
            maxLength={10}
            autoFocus={true}
          />
        </View>
      </View>
    );
  }

  _onChange(phone) {
    this.props.dispatch(changePhone(phone));
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(CapturePhone);