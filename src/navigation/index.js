import React, { useContext, useEffect } from 'react'
import { View, StatusBar } from 'react-native';
import { Stack } from './common';
import { AuthStack } from './auth';
import { ThemeContext } from '../theme/themeContext';
import { Splash } from '../widgets/splash';
import { MainStack } from './app';
import { useSelector } from 'react-redux';

let Root = Stack;

//navigation reference
export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function NavigationReset(name) {
    navigationRef.current?.reset({
        index: 0,
        routes: [{ name: name }]
    });
}

const MainNavigation = () => {

    let Theme = useContext(ThemeContext);

    const isLoggedIn = useSelector(state => state.Auth.isLoggedIn);
    const state = useSelector(state => state)

    useEffect(() => {
        console.log(state)
    }, [isLoggedIn]);

    return (
        <View style={{ flex: 1 }}>

            {/* The statusbar using theming */}
            <StatusBar backgroundColor={Theme.theme.primary} barStyle={`${Theme.theme.type}-content`} />

            <Root.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Root.Screen name="Splash" component={Splash} initialParams={{ isLoggedIn }} />
                <Root.Screen name="Main" component={MainStack} />
                <Root.Screen name="Auth" component={AuthStack} />

            </Root.Navigator>

        </View>
    )
}

export default MainNavigation