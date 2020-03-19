import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import LoadingScreen from '../screens/LoadingScreen'
import firstStartupFlow from './firstStartupFlow'
import mainFlow from './mainFlow'

const appNavigation = createSwitchNavigator({
  loading: LoadingScreen,
  firstStartupFlow,
  mainFlow
})

export default createAppContainer(appNavigation)
