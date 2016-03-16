import React from 'react-native';
import { connect } from 'react-redux';
import GiftedMessenger from 'react-native-gifted-messenger';
import _ from 'lodash';

import MessageComponent from '../../components/message';

import {
  sendMessage,
} from '../../actions/user';

import styles from './styles.js';

import {
  SCREEN_HEIGHT,
  STATUS_BAR_HEIGHT,
} from '../../theme';

let {
  View,
} = React;

class Chat extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let maxHeight = SCREEN_HEIGHT - STATUS_BAR_HEIGHT - 200;

    let people = _.map(this.props.user.set.online);

    let messages = _.map(this.props.user.set.messages, (message) => {

      let person = _.find(people, (person) => {
        return person.handle === message.handle;
      });

      if (person && person.mood === 'happy') {
        message.image = require('../../assets/faces-happy.png');
      } else if (person && person.mood == 'unhappy') {
        message.image = require('../../assets/faces-unhappy.png');
      } else {
        message.image = require('../../assets/faces-soso.png');
      }

      message.position = 'left';
      message.userId = message.handle;
      message.name = message.handle;

      return message;
    }) || [];

    return (
      <GiftedMessenger
        ref={(c) => this._GiftedMessenger = c}
        keyboardShouldPersistTaps={false}
        autoFocus={false}
        submitOnReturn={true}
        messages={messages}
        maxHeight={maxHeight}
        renderCustomText={this._renderCustomText.bind(this)}
        onCustomSend={this._onCustomSend.bind(this)}
        styles={styles}
        autoScroll={true}
      />
    );
  }

  _renderCustomText(rowData) {
    return (
      <MessageComponent
        message={rowData}
      />
    );
  }

  _onCustomSend(message) {

    this.props.dispatch(sendMessage({
      text: message.text,
      handle: this.props.user.handle,
    }, this.props.user));

    this._GiftedMessenger.onChangeText('');
  }
}

export default connect()(Chat);