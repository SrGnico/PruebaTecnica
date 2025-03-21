import { StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { useVideoPlayer, VideoView } from 'expo-video';
import galaxyVideoBg from '../data/videos/galaxy_video_bg.mp4'
const swarWarsLogo = require('../data/images/Star_Wars_Logo.png');
import Button from '@/components/button';
import { View } from '@/components/Themed';


const IndexScreen = () => {

   const player = useVideoPlayer(galaxyVideoBg, player => {
    player.loop = true;
    player.play();
  });

    return (
      <View style={styles.container}>
        {/* Video Player */}
        <VideoView style={styles.video} player={player} nativeControls={false}/>

        {/* Screen */}
        <SafeAreaView style={styles.column}>
          <Image
            style={styles.image}
            source={swarWarsLogo}
          />

          <Button title='Comienza tu aventura'/>
        </SafeAreaView>
      </View>
    );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    width: '130%',
    height: '150%',
  },
  column:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  image:{
    flex: 1,
    width: 250,
    objectFit: 'contain'
  }

});