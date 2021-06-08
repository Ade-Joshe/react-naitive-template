import React from 'react';
import { BottomNav } from '../common';
import { ServiceStack } from './serviceStack';
import { ProfileStack } from './profileStack';
import { Home } from '../../screens';
import { theme } from '../../theme';
import {
    Home as HomeIcon,
    Profile as ProfileIcon,
    Service as ServiceIcon,
} from '../../assets';

let NewStack = BottomNav;

const MainStack = () => {

    const { primary, neutral30 } = theme();

    return (
        <NewStack.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {

                    if (route.name === 'Home') {
                        return focused ? <HomeIcon color={primary} /> : <HomeIcon color={neutral30} />
                    } else if (route.name === 'Services') {
                        return focused ? <ServiceIcon color={primary} /> : <ServiceIcon color={neutral30} />;
                    } else if (route.name === 'Profile') {
                        return focused ? <ProfileIcon color={primary} /> : <ProfileIcon color={neutral30} />;
                    }
                    // You can return any component that you like here!
                },
            })}
            tabBarOptions={{
                activeTintColor: primary,
                inactiveTintColor: neutral30,
                allowFontScaling: true,
                adaptive: true,
                keyboardHidesTabBar: true,
                labelStyle: { fontFamily: 'Raleway' },
            }}
            lazy={false}
        >
            <NewStack.Screen name={'Home'} component={Home} />
            <NewStack.Screen name={'Services'} component={ProfileStack} />
            <NewStack.Screen name={'Profile'} component={ServiceStack} />
        </NewStack.Navigator >
    );
};

export { MainStack }