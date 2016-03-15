import React from 'react-native';

import {
  LANDING,
  CAPTURE_PHONE,
  VERIFY_PHONE,
} from '../../constants/routes';

import styles from './styles.js';

let {
  TouchableOpacity,
  Text,
} = React;

class LeftButton extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case CAPTURE_PHONE:
        return this._renderText('Back', this._back.bind(this));
      case VERIFY_PHONE:
        return this._renderText('Back', this._back.bind(this));
      default:
        return null;
    }
  }

   _renderText(text, action) {
    return (
      <TouchableOpacity
        onPress={() => action()}
        style={styles.button}
      >
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  _back() {
    this.props.navigator.pop();
  }
}

export default LeftButton;