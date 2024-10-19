import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { Colors } from '../../utils/Constants'
import { screenHeight, screenWidth } from '../../utils/Scaling'
import { resetAndNavigate } from '../../utils/NavigationUtils'

const SplashScreen:FC = () => {

  useEffect(()=>{
    setTimeout(()=>{
      resetAndNavigate('UserBottomTab')
    }, 30)
    console.log('SplashScreen Navigated');
  }, [])

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImage: {
    height: screenHeight * 0.4,
    width: screenWidth * 0.4,
    resizeMode: 'contain'
  }
})

export default SplashScreen