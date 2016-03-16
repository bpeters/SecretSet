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

    let messages = _.map(this.props.user.set.messages, (message) => {
      message.image = {
        uri: 'http://ahcoloring.net/images/hnBcI3uRl.jpg'
      };

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