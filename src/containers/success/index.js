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

class Success extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.push({
        component: CaptureSecretContainer,
        type: CAPTURE_SECRET,
      });
    }, 1500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.big}>
          Success!
        </Text>
        <Text style={styles.small}>
          Mobile Phone Verified
        </Text>
      </View>
    );
  }
}

export default Success;