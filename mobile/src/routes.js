import {
    createAppContainer,
    createSwitchNavigator,
    SafeAreaView
} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  SafeAreaView.setStatusBarHeight(0);
}

import Login from './pages/Login';
import Book from './pages/Book';
import List from './pages/List';

const Spots = createStackNavigator(
	{
		List,
        Book
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#E14B4C'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
            
        },
    }
);

List.navigationOptions = {
    header: null
};

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Spots
    })
);

export default Routes;