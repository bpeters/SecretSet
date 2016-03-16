import React from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SideMenuContainer from '../../containers/side-menu';
import ChatComponent from '../../components/chat';

import {
  toggleSideMenu,
} from '../../actions/app';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  Image,
} = React;

class SecretSet extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let set = this.props.user.set;

    return (
      <SideMenuContainer
        navigator={this.props.navigator}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.menu}>
              <TouchableOpacity
                onPress={this._toggleMenu.bind(this)}
              >
                <Icon
                  name='menu'
                  size={28}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>
              {set.name}
            </Text>
          </View>
          <ChatComponent
            user={this.props.user}
          />
        </View>
      </SideMenuContainer>
    );
  }

  _toggleMenu() {
    this.props.dispatch(toggleSideMenu());
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(SecretSet);