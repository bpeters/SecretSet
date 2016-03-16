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

    console.log(set);

    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.setName}>
            {set.name}
          </Text>
          <Text style={styles.createdBy}>
            {set.createdBy.toUpperCase()}
          </Text>
          <Text style={styles.setDescription}>
            {set.description}
          </Text>
        </View>
      </View>
    );
  }

}

function select(state) {
  return {
    set: state.user.set,
  };
}

export default connect(select)(SetPreview);