import React from 'react-native';
import Animatable from 'react-native-animatable';
import ParsedText from 'react-native-parsed-text';

import styles from './styles.js';

let {
  View,
  Text,
} = React;

class Message extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Animatable.View
        animation='fadeIn'
        duration={400}
        style={styles.message}
      >
        <ParsedText
          style={styles.text}
          parse={
            [
              {type: 'url', style: styles.url},
              {type: 'phone', style: styles.phone},
              {type: 'email', style: styles.email},
            ]
          }
        >
          {this.props.message.text}
        </ParsedText>
      </Animatable.View>
    );
  }

}

export default Message;