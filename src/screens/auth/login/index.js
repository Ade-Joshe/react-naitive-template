

import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import config from '../../../../config'
import { Button } from '../../../components'
import { DONE_SAVING_TO_LOCAL, LOGIN, LOGOUT, SAVING_TO_LOCAL, handleLogin } from '../../../store'
import { theme } from '../../../theme'

const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const { neutral20, neutral30, neutral10, darkText, primary } = theme();

    const auth = useSelector(state => state.Auth);
    const [isValid, setIsValid] = useState(false);

    const [details, setDetails] = useState({
        Email: "",
        Password: ""
    });

    useEffect(() => {
        console.log(auth.userDetails)
        // relaod whenever auth changes
    }, [auth]);

    useEffect(() => {
        const { Email, Password } = details;
        if ([Email, Password].includes("") || Password.length < 6) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [details]);

    const handleChange = (key, value) => {
        setDetails(prevState => ({ ...prevState, [key]: value }))
    }

    const handleLocalLogin = () => {

        dispatch({ type: SAVING_TO_LOCAL });

        axios.defaults.baseURL = config.createWalletUrl;
        handleLogin(details)
            .then((res) => {

                if (res.success) {
                    dispatch({ type: LOGIN, payload: res.data.profile });

                    navigation.reset({
                        index: 0,
                        routes: [{ name: "Main" }]
                    });
                }

            }).finally(() => {
                dispatch({ type: DONE_SAVING_TO_LOCAL });
            })
    };

    return (
        <View style={[styles.container, { backgroundColor: neutral10 }]}>
            <View>

                <Text style={styles.topTitle}>
                    {
                        auth.userDetails?.fullname ?
                            `Welcome Back, ${auth.userDetails?.fullname?.split(" ")[0]}!`
                            :
                            "Login to your account"
                    }
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

                <View style={styles.fullview}>
                    <Text style={[styles.label, { color: darkText }]}>Password</Text>
                    <TextInput value={details.Password}
                        onChangeText={(value) => handleChange("Password", value)}
                        placeholder={"**********"}
                        secureTextEntry
                        style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                        placeholderTextColor={neutral30}
                    />
                </View>

                <View style={[styles.butttonText, styles.forgotPassword]}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")} >
                        <Text style={{ color: primary }} >Forgot Password</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Button label={"Log in"} onPress={handleLocalLogin} disabled={!isValid || auth.loading} loading={auth.loading} />

                <View style={styles.butttonText}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")} >
                        <Text style={{ color: primary }} >Don't have an account, Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { Login }

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
