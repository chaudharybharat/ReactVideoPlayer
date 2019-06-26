/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Image,TouchableOpacity,StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video'

var mute_on="./icon/mute_on.png";
var mute_off="./icon/mute_off.png";
var play_pause="./icon/play_puase.png";

type Props = {};
export default class App extends Component<Props> {

  state={
    is_pause:false,
    is_play:true}
  // constructor(props) {
  //     super(props)
  //     this.state = {
  //       is_pause:true
  //     }
  //  }
  renderVideo () {
      return(
        <Video
          //source={require('./assets/video.mp4')}
          source={{uri:"https://www.radiantmediaplayer.com/media/bbb-360p.mp4"}}
          style={styles.backgroundVideo}
          muted={this.state.is_pause}
          repeat={true}
          paused={this.state.is_play }
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}

          onBuffer={this.onBuffer}                // Callback when remote video is buffering
           onError={this.videoError}               // Callback when video cannot be loaded
    ignoreSilentSwitch={"obey"}

        />
      )
  }
mute=()=>{
  this.setState({is_pause:!this.state.is_pause});
  this.state.is_pause?"true":"false"
}
playPause=()=>{
  this.setState({is_play:!this.state.is_play});
  this.state.is_play?"true":"false"
}
  render() {
    return (
      <View style={styles.container}>
        {this.renderVideo()}
          <View style={{flex:1,flexDirection:'row',marginTop:20}}>
        <TouchableOpacity
        onPress={this.mute}
          underlayColor='#fff'>
          <Image style={{width:40,height:40}}
        source={require(mute_on)}
      />
    </TouchableOpacity>
        <TouchableOpacity
        onPress={this.playPause}
          underlayColor='#fff'>
          <Image style={{width:40,height:40}}
        source={require(play_pause)}
      />
    </TouchableOpacity>
    <Text>Video mute {this.state.is_pause?"true":"false"}</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'white',
    alignItems: 'center',
  },
  backgroundVideo: {
     width:200,
     height:200
   },
});
