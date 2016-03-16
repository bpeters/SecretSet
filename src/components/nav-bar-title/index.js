import React from 'react-native';
import { connect } from 'react-redux';

import {
  CAPTURE_SECRET,
} from '../../constants/routes';

import styles from './styles.js';

let {
  Text,
} = React;

class Title extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.type) {
      case CAPTURE_SECRET:
        return this._renderHandle();
      default:
        return null;
    }
  }

  _renderHandle() {
    console.log(this.props.title);

    return (
      <Text style={styles.text}>
        {this.props.title}
      </Text>
    )
  }
}

function select(state) {
  return {
    title: state.user.handle,
  };
}

export default connect(select)(Title);