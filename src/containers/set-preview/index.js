import React from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import TicketComponent from '../../components/ticket';

import {
  joinSet,
  claimTicket,
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
    let claimed = set.claimed ? _.map(set.claimed) : [];
    let spots = (set.limit - online.length <= 0) ? 0 : (set.limit - online.length);
    let tickets = (set.tickets - claimed.length <= 0) ? 0 : (set.tickets - claimed.length);

    let action;
    let actionText;

    if (tickets > 0) {
      action = this._onClaim.bind(this);
      actionText = 'Claim Ticket';
    } else if (tickets === 0 && spots > 0) {
      action = this._onEnter.bind(this);
      actionText = 'Join Set';
    } else {
      //action = this._onPay.bind(this);
      actionText = `$${set.price} to Join Set`;
    }

    let hasTicket = _.find(this.props.user.claimed, (claim) => {
      console.log(claim);
      return claim === this.props.user.secret;
    });

    console.log(hasTicket);

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
            <Text style={[styles.spots, (tickets ? styles.tickets : null)]}>
              {`${tickets} tickets left`}
            </Text>
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
        {hasTicket ? this._renderTicket() : null}
      </View>
    );
  }

  _renderTicket() {
    return (
      <TicketComponent
        user={this.props.user}
      />
    );
  }

  _onClaim() {
    this.props.dispatch(claimTicket(this.props.user));
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