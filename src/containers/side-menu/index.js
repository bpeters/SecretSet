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
  PropTypes,
  Navigator,
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
          />
        }
        isOpen={this.props.menuIsOpen}
        disableGestures={true}
        onChange={(isOpen) => {
          if (!isOpen && this.props.menuIsOpen) {
            this.props.dispatch(toggleSideMenu());
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
  };
}

export default connect(select)(SideMenu);