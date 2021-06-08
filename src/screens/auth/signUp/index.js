
import React, { useState, useEffect } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../components';
import { DONE_SAVING_TO_LOCAL, SAVING_TO_LOCAL } from '../../../store';
import { theme } from '../../../theme';
import * as Actions from "../../../store"
import validateEmail from '../../../utils/emailValidator';
import validatePassword from '../../../utils/passwordValidator';

const SignUp = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const [isValid, setIsValid] = useState(false);
    const [formErrors, setFormErrors] = useState({ PhoneNumber: "", Email: "", Password: "" });
    const { neutral20, neutral30, neutral10, darkText, primary } = theme();
    const loading = useSelector(state => state.Auth.loading)

    const [details, setDetails] = useState({
        ...route.params,
        first_name: "",
        last_name: "",
        Email: "",
        PhoneNumber: "",
        Password: "",
        ConfirmPassword: ""
    });

    useEffect(() => {
        if (!route.params) {
            navigation.navigate("SelectBank");
        }
    }, [route.params]);

    // EmailError 
    useEffect(() => {
        if (details.Email) {
            if (validateEmail(details.Email)) {
                setFormErrors(prevState => ({ ...prevState, Email: "" }))
            } else {
                setFormErrors(prevState => ({ ...prevState, Email: "Invalid email entry" }))
            }
        }
    }, [details.Email]);

    // phone number 
    useEffect(() => {
        if (details.PhoneNumber) {
            if (Number(details.PhoneNumber)) {
                setFormErrors(prevState => ({ ...prevState, PhoneNumber: "" }))
            } else {
                setFormErrors(prevState => ({ ...prevState, PhoneNumber: "Invalid phone number" }))
            }
        }
    }, [details.PhoneNumber])

    // password 
    useEffect(() => {
        if (details.Password) {
            if (validatePassword(details.Password)) {
                setFormErrors(prevState => ({ ...prevState, Password: "" }));
            } else {
                setFormErrors(prevState => ({ ...prevState, Password: "Invalid password: \n\nMust contain: \na lowercase, \nan upper case \na number \nand a special symbol\nminimun of 6 characters" }));
            }
        }
    }, [details.Password])

    // all input validator 
    useEffect(() => {
        const { first_name, last_name, Email, Password, PhoneNumber, ConfirmPassword } = details;

        if ([first_name, last_name, Email, Password, PhoneNumber, ConfirmPassword, !formErrors.Email, !formErrors.PhoneNumber, !formErrors.Password].includes("") ||
            // Password.length < 6 ||
            Password !== ConfirmPassword ||
            PhoneNumber.length < 11 ||
            !Number(PhoneNumber) ||
            !validateEmail(Email) ||
            !validatePassword(Password) ||
            String(PhoneNumber).includes(".")
        ) {
            setIsValid(false);
        }
        else {
            setIsValid(true);
        }
    }, [details]);

    const handleChange = (key, value) => {
        setDetails(prevState => ({ ...prevState, [key]: value }));
    };

    const hanldeSubmit = () => {

        dispatch({ type: SAVING_TO_LOCAL });

        let payloadToSend = { ...details, fullName: details.first_name + " " + details.last_name };
        delete payloadToSend.first_name;
        delete payloadToSend.last_name;

        console.log({ payloadToSend })

        Actions.handleSignUp(payloadToSend).then((res) => {
            if (res.success) {
                navigation.navigate("RequestOTP", { ...res.data, user: payloadToSend });
            }
        }).catch((err) => {
            console.log("err: ", err)
        }).finally(() =>
            dispatch({ type: DONE_SAVING_TO_LOCAL })
        )

    };

    return (
        <View>

            <ScrollView contentContainerStyle={[{ backgroundColor: neutral10 }, styles.container]}>
                <Text style={styles.topTitle}>Create your account</Text>

                <View style={styles.formView}>
                    <View style={styles.halfView}>
                        <View style={styles.oneHalf}>
                            <Text style={[styles.label, { color: darkText }]}>First Name</Text>
                            <TextInput
                                value={details.first_name}
                                placeholder={"charles"}
                                onChangeText={(text) => handleChange("first_name", text)}
                                style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                                placeholderTextColor={neutral30}
                            />
                        </View>

                        <View style={styles.oneHalf}>
                            <Text style={[styles.label, { color: darkText }]}>Last Name</Text>
                            <TextInput
                                value={details.last_name}
                                placeholder={"samuel"}
                                onChangeText={(text) => handleChange("last_name", text)}
                                style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                                placeholderTextColor={neutral30}
                            />
                        </View>
                    </View>

                    <View style={styles.fullview}>
                        <Text style={[styles.label, { color: darkText }]}>Phone Number</Text>
                        <TextInput
                            value={details.PhoneNumber}
                            placeholder={"0901 189 1343"}
                            keyboardType={"number-pad"}
                            maxLength={11}
                            onChangeText={(text) => handleChange("PhoneNumber", text)}
                            style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                            placeholderTextColor={neutral30}
                        />
                        {formErrors.PhoneNumber ? <Text style={{ color: "red", ...styles.errorText }}>{formErrors.PhoneNumber}</Text> : <></>}
                    </View>

                    <View style={styles.fullview}>
                        <Text style={[styles.label, { color: darkText }]}>Email Address</Text>
                        <TextInput
                            value={details.Email}
                            placeholder={"ud**@mail.com"}
                            onChangeText={(text) => handleChange("Email", text)}
                            style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                            placeholderTextColor={neutral30}
                        />
                        {formErrors.Email ? <Text style={{ color: "red", ...styles.errorText }}>{formErrors.Email}</Text> : <></>}
                    </View>

                    <View style={styles.fullview}>
                        <Text style={[styles.label, { color: darkText }]}>Password</Text>
                        <TextInput
                            value={details.Password}
                            placeholder={"******"}
                            onChangeText={(text) => handleChange("Password", text)}
                            style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                            placeholderTextColor={neutral30}
                            secureTextEntry
                        />
                        {formErrors.Password ? <Text style={{ color: "red", ...styles.errorText }}>{formErrors.Password}</Text> : <></>}
                    </View>

                    <View style={styles.fullview}>
                        <Text style={[styles.label, { color: darkText }]}>Confirm password</Text>
                        <TextInput
                            value={details.ConfirmPassword}
                            placeholder={"******"}
                            onChangeText={(text) => handleChange("ConfirmPassword", text)}
                            style={[styles.textInput, { backgroundColor: neutral20, color: darkText }]}
                            placeholderTextColor={neutral30}
                            secureTextEntry
                        />
                        <Text style={{ color: "red", fontSize: 11 }}>{details.ConfirmPassword && details.Password !== details.ConfirmPassword ? "Passwords do not match" : ""}</Text>
                    </View>
                </View>

                <View style={{ justifyContent: "center", marginVertical: 40 }}>
                    <Button label={"Proceed"} onPress={hanldeSubmit} disabled={!isValid || loading} loading={loading} />

                    <View style={styles.butttonText}>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                            <Text style={{ color: primary }} >Already have an account, Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}

export { SignUp }

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingBottom: 0
    },
    halfView: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 20
    },
    formView: {
        flex: 1,
        paddingVertical: 10
    },
    label: {
        marginBottom: 6,
        fontSize: 12
    },
    fullview: {
        flex: 1,
        marginBottom: 20
    },
    textInput: {
        padding: 12,
        borderRadius: 6,
    },
    oneHalf: {
        width: "47%"
    },
    topTitle: {
        marginTop: 40,
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "circular"
    },
    butttonText: {
        // textAlign: "center",
        marginTop: 10,
        alignItems: "center"
        // backgroundColor: "red"
    },
    errorText: {
        fontSize: 12
    }
})
