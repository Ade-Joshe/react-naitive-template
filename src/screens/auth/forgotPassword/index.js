

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button } from '../../../components'
import { theme } from '../../../theme'

const ForgotPassword = ({ navigation }) => {

    const { neutral20, neutral30, neutral10, darkText, primary } = theme();

    const auth = useSelector(state => state.Auth);
    const [isValid, setIsValid] = useState(false);

    const [details, setDetails] = useState({
        Email: ""
    });

    useEffect(() => {
        console.log(auth.userDetails)
        // relaod whenever auth changes
    }, [auth]);

    useEffect(() => {
        const { Email } = details;

        if (Email) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [details]);

    const handleChange = (key, value) => {
        setDetails(prevState => ({ ...prevState, [key]: value }))
    }

    return (
        <View style={[styles.container, { backgroundColor: neutral10 }]}>
            <View>
                <Text style={styles.topTitle}>
                    Forgot Password
                </Text>

                <View style={styles.fullview}>
                    <Text style={[styles.label, { color: darkText }]}>Email Address</Text>
                    <TextInput
                        value={details.Email}
                        onChangeText={(value) => handleChange("Email", value)}
                        placeholder={"ud***@mail.com"}
                        style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                        placeholderTextColor={neutral30}
                    />
                </View>
            </View>

            <View>
                <Button label={"Forgot Password"} onPress={() => { }} disabled={!isValid || auth.loading} loading={auth.loading} />

                <View style={styles.butttonText}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                        <Text style={{ color: primary }} >Already have an account, Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { ForgotPassword }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 15,
        paddingVertical: 40
    },
    topTitle: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },
    label: {
        marginBottom: 6,
        fontSize: 12
    },
    fullview: {
        // flex: 1,
        marginBottom: 20
    },
    textInput: {
        padding: 12,
        borderRadius: 6,
    },
    butttonText: {
        // textAlign: "center",
        marginTop: 18,
        alignItems: "center"
    },
    forgotPassword: {
        alignItems: "flex-start"
    }
})
