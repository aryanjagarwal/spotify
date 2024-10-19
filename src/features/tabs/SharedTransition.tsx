import { View, Text } from 'react-native'
import React, { FC } from 'react'
import UserBottomTab from './UserBottomTab'
import { SharedStateProvider } from './SharedContext'

const SharedTransition:FC = () => {
  return (
    <SharedStateProvider>
        <UserBottomTab />
    </SharedStateProvider>
  )
}

export default SharedTransition