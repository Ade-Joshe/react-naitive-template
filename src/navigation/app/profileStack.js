
import React from 'react';
import { Stack } from '../common';
import { Profile } from '../../screens';

let NewStack = Stack;

const ProfileStack = () => {

    return (
        <NewStack.Navigator
            screenOptions={{
                headerTitleAlign: "center"
            }}
        >
            <NewStack.Screen name={'Profile'} options={{ headerShown: false }} component={Profile} />

        </NewStack.Navigator >
    );
};

export { ProfileStack }