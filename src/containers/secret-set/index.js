import React from 'react-native';
import { connect } from 'react-redux';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  Image,
} = React;

class SecretSet extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(SecretSet);