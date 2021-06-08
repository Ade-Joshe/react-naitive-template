
import React from 'react';
import { Stack } from '../common';
import { Services } from '../../screens';

let NewStack = Stack;

const ServiceStack = () => {

    return (
        <NewStack.Navigator
            screenOptions={{
                headerTitleAlign: "center"
            }}
        >
            <NewStack.Screen name={'Service'} options={{ headerShown: false }} component={Services} />
        </NewStack.Navigator >
    );
};

export { ServiceStack }