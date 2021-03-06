import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile104001Navigator from '../features/UserProfile104001/navigator';
import Maps103982Navigator from '../features/Maps103982/navigator';
import Settings103960Navigator from '../features/Settings103960/navigator';
import Settings103945Navigator from '../features/Settings103945/navigator';
import NotificationList103944Navigator from '../features/NotificationList103944/navigator';
import Maps103943Navigator from '../features/Maps103943/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile104001: { screen: UserProfile104001Navigator },
Maps103982: { screen: Maps103982Navigator },
Settings103960: { screen: Settings103960Navigator },
Settings103945: { screen: Settings103945Navigator },
NotificationList103944: { screen: NotificationList103944Navigator },
Maps103943: { screen: Maps103943Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
