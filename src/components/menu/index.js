import React from 'react-native';
import { connect } from 'react-redux';

import styles from './styles.js';

let {
  View,
} = React;

class Menu extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuIsOpen && this.state.hide) {
      this.setState({
        hide: false,
      });
    } else if (!nextProps.menuIsOpen && this.props.menuIsOpen) {
      setTimeout(() => {
        this.setState({
          hide: true,
        });
      }, 300);
    }
  }

  render() {
    return (
      <View style={[styles.container, this.state.hide ? styles.hide : null]}>

      </View>
    );
  }

}

export default connect()(Menu);