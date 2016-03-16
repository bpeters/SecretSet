import React from 'react-native';

import CaptureSecretContainer from '../../containers/capture-secret';

import {
  CAPTURE_SECRET,
} from '../../constants/routes';

import styles from './styles.js';

let {
  View,
  Text,
} = React;

class Failure extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.pop();
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.big}>
          Oops!
        </Text>
        <Text style={styles.small}>
          {this.props.route.error}
        </Text>
      </View>
    );
  }
}

export default Failure;