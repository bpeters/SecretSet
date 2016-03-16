import React from 'react-native';
import { connect } from 'react-redux';

import ReactSideMenu from 'react-native-side-menu';
import MenuComponent from '../../components/menu';

import {
  toggleSideMenu
} from '../../actions/app';

import {
  SIDE_MENU_OFFSET
} from '../../theme';

let {
  StatusBarIOS,
} = React;

class SideMenu extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactSideMenu
        openMenuOffset={SIDE_MENU_OFFSET}
        menu={
          <MenuComponent
            navigator={this.props.navigator}
            menuIsOpen={this.props.menuIsOpen}
            user={this.props.user}
          />
        }
        isOpen={this.props.menuIsOpen}
        disableGestures={true}
        onChange={(isOpen) => {
          if (!isOpen && this.props.menuIsOpen) {
            this.props.dispatch(toggleSideMenu());

            StatusBarIOS.setHidden(false);
          }
        }}
      >
        {this.props.children}
      </ReactSideMenu>
    );
  }
}

function select(state) {
  return {
    menuIsOpen: state.app.menuIsOpen,
    user: state.user,
  };
}

export default connect(select)(SideMenu);