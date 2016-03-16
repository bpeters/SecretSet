import React from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import Animatable from 'react-native-animatable';

import styles from './styles.js';

let {
  View,
  Text,
  Image,
} = React;

class Ticket extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Animatable.View
        animation='bounceInUp'
        duration={1200}
        style={styles.container}
      >
        <View style={styles.title}>
          <Text style={styles.location}>
            1010a Juniper Street, Austin TX
          </Text>
        </View>
        <View style={styles.underTitle}>
          <Text style={styles.time}>
            9:00 PM
          </Text>
          <Text style={styles.date}>
            18 March 2016
          </Text>
        </View>
        <Image
          resizeMode='contain'
          style={styles.QR}
          source={require('../../assets/qr.png')}
        />
      </Animatable.View>
    );
  }
}

export default connect()(Ticket);