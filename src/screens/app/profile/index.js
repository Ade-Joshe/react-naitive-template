import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { ForwardIcon, mainImg } from '../../../assets';
import { LOGOUT } from '../../../store';
import { theme } from '../../../theme';

const Profile = ({ navigation }) => {

    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.Auth.userDetails)
    const { neutral30, black, neutral10 } = theme();

    const logout = () => {
        dispatch({ type: LOGOUT });
        navigation.reset({
            index: 0,
            routes: [{ name: "Auth" }]
        });
    }

    return (
        <ScrollView>
            <StatusBar backgroundColor={"#031A6E"} />
            <View style={[styles.imageBox, { backgroundColor: "#031A6E" }]}>
                <Image source={mainImg} style={styles.avatar} />
                <Text style={[styles.name, { color: neutral10 }]}>{userDetails?.fullname}</Text>
                <Text style={[styles.mail, { color: neutral30 }]}>{userDetails?.email}</Text>
            </View>
            <View style={styles.container}>

                <View style={styles.section}>
                    <Text style={[styles.sectioHead, { color: black + 90 }]}>Personal</Text>
                    <View style={styles.sectionBody}>
                        <TouchableOpacity style={styles.sectionBodyContent} onPress={() => navigation.navigate("EditProfile")}>
                            <Text style={styles.text}>Profile</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Account</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectioHead, { color: black + 90 }]}>Money</Text>
                    <View style={styles.sectionBody}>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Bank & Cards</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Statements</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectioHead, { color: black + 90 }]}>Notifications</Text>
                    <View style={styles.sectionBody}>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Email Notifications</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Push Notifications</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectioHead, { color: black + 90 }]}>Support</Text>
                    <View style={styles.sectionBody}>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Get Help</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sectionBodyContent}>
                            <Text style={styles.text}>Terms & Conditions</Text>
                            <ForwardIcon />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity onPress={logout}>
                        <Text style={[styles.sectioHead, { color: black + 90 }]}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export { Profile }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    imageBox: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 64
    },
    avatar: {
        width: 90,
        height: 90,
        resizeMode: "cover",
        borderRadius: 50
    },
    mail: {
    },
    name: {
        fontSize: 20,
        marginTop: 16,
        marginBottom: 4
    },
    section: {
        // backgroundColor: "red",
        marginBottom: 24
    },
    sectioHead: {
        fontWeight: "bold"
    },
    sectionBody: {
        marginTop: 16
    },
    sectionBodyContent: {
        flexDirection: "row", justifyContent: "space-between", marginBottom: 8, alignItems: "center"
    },
    text: {
        fontWeight: "normal"
    }
})
