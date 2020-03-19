import { NavigationActions } from 'react-navigation'

let _navigator

export const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef
}

export const navigateTo = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  )
}
