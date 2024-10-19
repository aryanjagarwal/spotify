import { View, Text, ViewStyle, Animated, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'

interface ScalePressProps {
    onPress?: () => void;
    onLongPress?: () => void;
    children: React.ReactNode;
    style?: ViewStyle;
}

const ScalePress:FC<ScalePressProps> = ({
    onLongPress,
    onPress,
    children,
    style
}) => {

    const scaleValue = new Animated.Value(1);

    const onPressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.8,
            useNativeDriver: true
        }).start();
    }

    const onPressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

  return (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={1}
        style={style}
    >
        <Animated.View style={[{transform:[{scale:scaleValue}], width: '100%'}]}>
            {children}
        </Animated.View>
    </TouchableOpacity>
  )
}

export default ScalePress