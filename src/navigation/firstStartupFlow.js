import { createStackNavigator } from 'react-navigation-stack'
import FirstStartupScreen from '../screens/FirstStartupScreen'

export default createStackNavigator({
  FirstStartup: FirstStartupScreen
})

FirstStartupScreen.navigationOptions = {
  headerShown: false
}
