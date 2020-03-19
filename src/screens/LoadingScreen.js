import { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { navigateTo } from '../navigation/navigationRef'
import Routes from '../navigation/routes'

const _userExists = async () => {
  const userExists = await AsyncStorage.getItem('user')
  if (userExists) {
    navigateTo(Routes.main)
  } else {
    navigateTo(Routes.firstStartup)
  }
}

const LoadingScreen = () => {
  useEffect(() => {
    _userExists()
  }, [])
  return null
}

export default LoadingScreen
