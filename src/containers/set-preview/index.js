import React from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  joinSet,
} from '../../actions/user';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  Image,
} = React;

class SetPreview extends React.Component{

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let set = this.props.user.set;
    let online = set.online ? _.map(set.online) : [];
    let spots = (set.limit - online.length <= 0) ? 0 : (set.limit - online.length);

    let action = this._onEnter.bind(this);
    let actionText = 'Join Set';

    if (spots === 0 && set.price) {
      action = this._onPay.bind(this);
      actionText = `$${set.price} to Join Set`;
    }

    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.name}>
            {set.name}
          </Text>
          <Text style={styles.createdBy}>
            {`@${set.createdBy.toUpperCase()}`}
          </Text>
          <Text style={styles.description}>
            {set.description}
          </Text>
          <View style={styles.stats}>
            <Text style={[styles.spots, (spots ? styles.open : null)]}>
              {`${spots} free spots`}
            </Text>
            <Text style={styles.online}>
              {`${online.length} online`}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={action}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {actionText}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _onEnter() {
    this.props.dispatch(joinSet(this.props.user, this.props.navigator));
  }

  _onPay() {
    
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(SetPreview);