import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homescreen from './screens/homescreen';
import Signup from './screens/auth/signup';
import Login from './screens/auth/login';

import { useSelector } from 'react-redux';

const navigation = () => {

    const isAuth = useSelector(state => state.auth.isAuth)

    const Stack = createSharedElementStackNavigator();
    const Tab = createBottomTabNavigator();

    const TabScreens = () => {

        return (
            <Tab.Navigator >
                <Tab.Screen  name='feed' component={Homescreen} />
            </Tab.Navigator>
        );
    }

    const AuthScreens = () => {

        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='signup' component={Signup} />
                <Stack.Screen name='login' component={Login} />
            </Stack.Navigator>
        );
    }

    return (
        <NavigationContainer>
            {isAuth ? <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name='homescreen' component={TabScreens} />
            </Stack.Navigator> :
            <AuthScreens />
            }
        </NavigationContainer>
    );

}

export default navigation;