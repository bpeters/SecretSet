import React from 'react-native';
import { connect } from 'react-redux';

import LandingContainer from './containers/landing';
import RightButtonComponent from './components/nav-bar-right-button';
import LeftButtonComponent from './components/nav-bar-left-button';

import {
  LANDING,
  CAPTURE_PHONE,
  VERIFY_PHONE,
} from './constants/routes';

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
      return null;
    },

  });
}

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
        initialRoute={{
          component: LandingContainer,
          type: LANDING,
        }}
      />
    );
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
      default:
        return Navigator.SceneConfigs.FloatFromRight;
    }
  }

}

export default App;