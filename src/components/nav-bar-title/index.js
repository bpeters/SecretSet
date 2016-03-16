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
      default:
        return null;
    }
  }
}

function select(state) {
  return {};
}

export default connect(select)(Title);