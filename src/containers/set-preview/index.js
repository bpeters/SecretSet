import React from 'react-native';
import { connect } from 'react-redux';

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
    let set = this.props.set;
    let online = set.online ? set.online.length : 0;
    let spots = (set.limit - online <= 0) ? 0 : (set.limit - online);

    let action = this._onEnter.bind(this);
    let actionText = 'Join Set';

    console.log(set);

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
              {`${online} online`}
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
    
  }

  _onPay() {
    
  }

}

function select(state) {
  return {
    set: state.user.set,
  };
}

export default connect(select)(SetPreview);