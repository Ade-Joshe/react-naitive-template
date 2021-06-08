import React from 'react'
import {
    Onboard, Login, SignUp, ForgotPassword
} from '../../screens';
import { Stack } from '../common';

let NewStack = Stack;

const AuthStack = () => {
    return (
        <NewStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <NewStack.Screen name="Onboarding" component={Onboard} />
            <NewStack.Screen name="Login" component={Login} />
            <NewStack.Screen name="SignUp" component={SignUp} />
            <NewStack.Screen name="ForgotPassword" component={ForgotPassword} />
        </NewStack.Navigator>
    )
}

export { AuthStack }