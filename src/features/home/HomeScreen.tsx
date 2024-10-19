import { Text } from 'react-native';
import React from 'react';
import CustomSafeAreaView from '../../components/ui/CustomSafeAreaView';
import withPlayer from '../../components/player/Player';

const HomeScreen = () => {
  return (
    <CustomSafeAreaView>
      <Text>Home Screen</Text>
    </CustomSafeAreaView>
  );
};

export default withPlayer(HomeScreen);
