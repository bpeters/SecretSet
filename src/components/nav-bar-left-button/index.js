import React from 'react-native';
import { connect } from 'react-redux';

import {
  LANDING,
  CAPTURE_PHONE,
  VERIFY_PHONE,
  SUCCESS,
  CAPTURE_SECRET,
  SECRET_SET,
  SET_PREVIEW,
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
      case SET_PREVIEW:
        return this._renderText('Back', this._back.bind(this), true);
      default:
        return null;
    }
  }

   _renderText(text, action, isWhite) {
    return (
      <TouchableOpacity
        onPress={() => action()}
        style={styles.button}
      >
        <Text style={[styles.text, (isWhite ? styles.white : null)]}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  _back() {
    this.props.navigator.pop();
  }
}

export default connect()(LeftButton);