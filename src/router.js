import { StackNavigator } from 'react-navigation';
import * as Pages from './pages';

export const INITIAL_ROUTE = 'Home';

export const AppNavigator = StackNavigator(
    {
        Home: { screen: Pages.Home },
        Second: { screen: Pages.Second }
    },
    {
        initialRouteName: INITIAL_ROUTE
    }
);
