import React, { useEffect } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { SplashLogo } from '../../assets';
import { theme } from '../../theme';


const Splash = ({ navigation, route }) => {

    const { primary } = theme();

    useEffect(() => {
        const { isLoggedIn } = route.params;

        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [
                    { name: isLoggedIn ? "Main" : "Auth" }
                ]
            });

        }, 2000);
    }, [navigation, route.params?.isLoggedIn]);

    return (
        <View style={[styles.bgPrimary, { backgroundColor: primary }]}>
            <StatusBar barStyle="light-content" backgroundColor={primary} />
            <SplashLogo />
        </View>
    )
}

const styles = StyleSheet.create({
    bgPrimary: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        resizeMode: "contain"
    }
})

export { Splash }