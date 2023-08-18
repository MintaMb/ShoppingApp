
import { createNavigationContainerRef } from '@react-navigation/native';
import { ScreenConstants } from '../constants';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function navigateToHome() {
  if (navigationRef.isReady()) {
    navigationRef.resetRoot({
      index: 0,
      routes: [{
        name: ScreenConstants.HOME_STACK_SCREEN
      }]
    })
  }
}

export function resetNavigation(route, state) {
  const extraData = state ? state : {}
  navigationRef.resetRoot({
    index: 0,
    routes: [{
      name: route,
      ...extraData
    }],
  });
}

export const currentRoute = () => {
  return navigationRef.current.getCurrentRoute()
}
