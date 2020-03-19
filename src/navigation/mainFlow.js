import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import TabBarIcon from '../components/TabBarIcon'
import LoyaltyCardScreen from '../screens/LoyaltyCardScreen'
import RewardsScreen from '../screens/RewardsScreen'

export default createBottomTabNavigator({
  Card: LoyaltyCardScreen,
  Rewards: RewardsScreen
})

LoyaltyCardScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-card' />
  )
}

RewardsScreen.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-gift' />
  )
}
