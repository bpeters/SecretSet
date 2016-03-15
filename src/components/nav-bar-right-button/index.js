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

class RightButton extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case CAPTURE_PHONE:
        return this._renderText('Next', this._toVerify.bind(this));
      case VERIFY_PHONE:
        return this._renderText('Next', this._toHandle.bind(this));
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

  _toVerify() {

  }

  _toHandle() {

  }
}

export default RightButton;