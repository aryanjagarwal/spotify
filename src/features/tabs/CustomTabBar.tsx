import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BOTTOM_TAB_HEIGHT, Colors} from '../../utils/Constants';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScalePress from '../../components/ui/ScalePress';
import {HomeTabIcon, LibraryTabIcon, SearchTabIcon} from './TabIcon';
import {useSharedState} from './SharedContext';

const CustomTabBar: FC<BottomTabBarProps> = props => {
  const {state, navigation} = props;
  const safeAreaInsets = useSafeAreaInsets();

  const {translationY} = useSharedState();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -translationY.value}],
    };
  });

  return (
    <Animated.View
      style={[
        styles.tabBarContainer,
        animatedStyle,
        {paddingBottom: safeAreaInsets.bottom},
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event?.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <ScalePress
            key={index}
            style={styles.tabItem}
            onLongPress={onLongPress}
            onPress={onPress}>
            {route?.name === 'Home' && <HomeTabIcon focused={isFocused} />}
            {route?.name === 'Library' && (
              <LibraryTabIcon focused={isFocused} />
            )}
            {route?.name === 'Search' && <SearchTabIcon focused={isFocused} />}
          </ScalePress>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: Colors.backgroundDark,
    width: '100%',
    position: 'absolute',
    height: BOTTOM_TAB_HEIGHT,
    bottom: 0,
    paddingTop: 10,
    zIndex: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabBar;
