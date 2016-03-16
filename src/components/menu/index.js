import React from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  leaveSet,
} from '../../actions/user';

import styles from './styles.js';

let {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} = React;

class Menu extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.menuIsOpen && this.state.hide) {
      this.setState({
        hide: false,
      });
    } else if (!nextProps.menuIsOpen && this.props.menuIsOpen) {
      setTimeout(() => {
        this.setState({
          hide: true,
        });
      }, 300);
    }
  }

  render() {
    let set = this.props.user.set;
    let people = _.map(set.online, (person) => {
      return this._renderPerson(person);
    });

    return (
      <View style={[styles.container, this.state.hide ? styles.hide : null]}>
        <View style={styles.statusBar} />
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{ uri: set.image }}
        />
        <ScrollView
          ref={(scrollView) => { this._scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          style={styles.scrollView}
        >
          <Text style={styles.artist}>
            {set.artist}
          </Text>
          <Text style={styles.name}>
            {`${set.name} -`}
          </Text>
          <Text style={styles.description}>
            {set.description}
          </Text>
          <Text style={styles.link}>
            read more
          </Text>
          <View style={styles.people}>
            <Text style={styles.peopleTitle}>
              {`PEOPLE (${people.length})`}
            </Text>
            {people}
          </View>
          <TouchableOpacity
            onPress={this._onLeave.bind(this)}
            style={styles.leave}
          >
            <Icon
              name='exit-to-app'
              size={16}
              style={styles.leaveIcon}
            />
            <Text style={styles.leaveText}>
              Leave Set
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  _renderPerson(person) {
    return (
      <Text key={person.phone} style={styles.person}>
        {person.handle}
      </Text>
    );
  }

  _onLeave() {
    this.props.dispatch(leaveSet(this.props.user, this.props.navigator));
  }

}

export default connect()(Menu);