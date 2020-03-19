import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import { setTopLevelNavigator } from './src/navigation/navigationRef'

export default () => {
  return (
    <AppNavigator
      ref={(navigator) => { setTopLevelNavigator(navigator) }}
    />
  )
}
