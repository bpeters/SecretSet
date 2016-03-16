import React from 'react-native';
import { connect } from 'react-redux';

import LandingContainer from './containers/landing';
import CaptureSecretContainer from './containers/capture-secret';
import TitleComponent from './components/nav-bar-title';
import RightButtonComponent from './components/nav-bar-right-button';
import LeftButtonComponent from './components/nav-bar-left-button';

import {
  LANDING,
  CAPTURE_PHONE,
  VERIFY_PHONE,
  SUCCESS,
  CAPTURE_SECRET,
  FAILURE,
} from './constants/routes';

import {
  initalize,
} from './actions/user';

import Theme from './theme';

let {
  Navigator,
  Text,
  View,
} = React;

function NavigationBarRouteMapper() {
  return ({

    LeftButton: function (route, navigator, index, navState) {
      return (
        <LeftButtonComponent
          navigator={navigator}
          type={route.type}
        />
      );
    },

    RightButton: function (route, navigator, index, navState) {
      return (
        <RightButtonComponent
          navigator={navigator}
          type={route.type}
        />
      );
    },

    Title: function (route, navigator, index, navState) {
      return (
        <TitleComponent
          type={route.type}
        />
      );
    },

  });
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(initalize());
  }

  render() {
    if (this.props.user.initialized) {

      let initialRoute;

      if (this.props.user.isVerified) {
        initialRoute = {
          component: CaptureSecretContainer,
          type: CAPTURE_SECRET,
        };
      } else {
        initialRoute = {
          component: LandingContainer,
          type: LANDING,
        };
      }

      return (
        <Navigator
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper()}
              style={Theme.noNavBar}
            />
          }
          configureScene={this._configureScene.bind(this)}
          renderScene={this._renderScene.bind(this)}
          initialRoute={initialRoute}
        />
      );
    } else {
      return null;
    }
  }

  _renderScene(route, navigator) {
    const Component = route.component;

    return (
      <Component
        navigator={navigator}
        route={route}
      />
    );
  }

  _configureScene(route) {
    switch (route.type) {
      case FAILURE:
        return Navigator.SceneConfigs.VerticalUpSwipeJump;
      case SUCCESS:
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
      default:
        return Navigator.SceneConfigs.HorizontalSwipeJump;
    }
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(App);