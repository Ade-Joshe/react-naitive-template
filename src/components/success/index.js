import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SuccessTick } from '../../assets';
import { theme } from '../../theme';
import { Button } from '../button';

const Success = ({ message, nextRoute, onPress, buttonText, navigation, callback }) => {
    const { primary, neutral10 } = theme();

    useEffect(() => {
        if (!onPress && !buttonText) {
            setTimeout(() => {
                if (callback) {
                    return callback();
                }
                goToNext();
            }, 2000);
        }
    }, []);

    const goToNext = () => {
        navigation.navigate(nextRoute);
    }

    return (
        <View style={[styles.container, { backgroundColor: primary }]}>
            <SuccessTick />
            <Text style={[styles.message, { color: neutral10 }]}>{message}</Text>

            {
                buttonText ?
                    <View style={styles.buttonContainer}>
                        <Button label={buttonText} onPress={onPress ? onPress : goToNext} buttonStyles={{ backgroundColor: neutral10 }} textStyle={{ color: primary }} />
                    </View>
                    :
                    <></>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
    message: {
        marginTop: 32,
        textAlign: "center"
    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        left: 15,
        right: 15
    }
})

export { Success }