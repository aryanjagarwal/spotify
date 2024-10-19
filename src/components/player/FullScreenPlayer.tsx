import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/Constants';
import {screenHeight, screenWidth} from '../../utils/Scaling';

const FullScreenPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>FullScreenPlayer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'red',
  },
});

export default FullScreenPlayer;
