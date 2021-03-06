import React from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import YouTube from 'react-native-youtube';

import SideMenuContainer from '../../containers/side-menu';
import ChatComponent from '../../components/chat';

import {
  toggleSideMenu,
} from '../../actions/app';

import {
  addMood,
} from '../../actions/user';

import styles from './styles.js';

let {
  View,
  Text,
  TouchableOpacity,
  Image,
} = React;

class SecretSet extends React.Component{

  constructor(props) {
    super(props);

    let videos = _.map(props.user.set.videos);

    console.log(moment().format('x'));

    this.state = {
      video: videos[0],
      videoIndex: 0,
      skipped: 0,
      mood: null,
    };
  }

  render() {
    let set = this.props.user.set;
    let videos = _.map(this.props.user.set.videos);

    let people = _.map(this.props.user.set.online);

    let unhappy = _.filter(people, (person) => {
      return person.mood === 'unhappy';
    });
    let happy = _.filter(people, (person) => {
      return person.mood === 'happy';
    });
    let soso = _.filter(people, (person) => {
      return person.mood === 'soso';
    });

    return (
      <SideMenuContainer
        navigator={this.props.navigator}
      >
        <View style={styles.container}>
          <YouTube
            ref={(c) => this._youtubePlayer = c}
            style={styles.video}
            videoId={this.state.video}
            play={true}
            hidden={false}
            controls={0}
            showinfo={false}
            playsInline={true}
            modestbranding={true}
            onReady={(e)=>{
              console.log(e);
            }}
            onChangeState={(e)=>{
              if (e.state === 'ended') {
                let videoIndex = (this.state.videoIndex < videos.length - 1) ? this.state.videoIndex + 1 : 0;
                this.setState({
                  video: videos[videoIndex],
                  videoIndex: videoIndex,
                });
              }
            }}
            onChangeQuality={(e)=>{
              console.log(e);
            }}
            onError={(e)=>{
              console.log(e);
            }}
            onProgress={(e)=>{

              // let nowMS = moment().format('x');
              // let startMS = set.startAt;
              // let currentMS = e.currentTime * 1000;
              // let durationMS = e.duration * 1000;
              // let nextMS = durationMS + startMS + this.state.skipped;

              // let videoIndex = (this.state.videoIndex < videos.length - 1) ? this.state.videoIndex + 1 : 0;

              // if (nowMS > nextMS) {
              //   this.setState({
              //     video: videos[videoIndex],
              //     videoIndex: videoIndex,
              //     skipped: nowMS - nextMS,
              //   });
              // } else if (nowMS < nextMS) {
              //   let seek = (currentMS + (nextMS - nowMS)) / 1000;
              //   console.log(seek);

              //   this._youtubePlayer.seekTo(seek);
              // }
            }}
          />
          <View style={styles.header}>
            <View style={styles.menu}>
              <TouchableOpacity
                onPress={this._toggleMenu.bind(this)}
              >
                <Icon
                  name='menu'
                  size={28}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>
              {set.name}
            </Text>
          </View>
          <View style={styles.emotions}>
            <TouchableOpacity
              onPress={this._onHappy.bind(this)}
            >
              <Image
                resizeMode='contain'
                style={[styles.face, {top: -1 * happy.length}, (this.state.mood === 'happy' ? styles.mood : null)]}
                source={require('../../assets/faces-happy.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._onSoSo.bind(this)}
            >
              <Image
                resizeMode='contain'
                style={[styles.face, {top: -1 * soso.length}, (this.state.mood === 'soso' ? styles.mood : null)]}
                source={require('../../assets/faces-soso.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._onUnhappy.bind(this)}
            >
              <Image
                resizeMode='contain'
                style={[styles.face, {top: -1 * unhappy.length}, (this.state.mood === 'unhappy' ? styles.mood : null)]}
                source={require('../../assets/faces-unhappy.png')}
              />
            </TouchableOpacity>
          </View>
          <ChatComponent
            user={this.props.user}
          />
        </View>
      </SideMenuContainer>
    );
  }

  _toggleMenu() {
    this.props.dispatch(toggleSideMenu());
  }

  _onHappy() {
    this.props.dispatch(addMood('happy', this.props.user));
    this.setState({
      mood:'happy',
    });
  }

  _onSoSo() {
    this.props.dispatch(addMood('soso', this.props.user));
    this.setState({
      mood:'soso',
    });
  }

  _onUnhappy() {
    this.props.dispatch(addMood('unhappy', this.props.user));
    this.setState({
      mood:'unhappy',
    });
  }

}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(SecretSet);