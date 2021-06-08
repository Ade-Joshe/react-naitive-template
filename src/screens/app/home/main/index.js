import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../../../components/button';
import { fetchWalletBalance } from '../../../../store/actions/wallet.actions';
import { theme } from '../../../../theme';

export const Home = ({ navigation }) => {

    const dispatch = useDispatch();

    const auth = useSelector(state => state.Auth);
    const balance = useSelector(state => state.Wallet.balance);
    const { neutral10, primary } = theme();
    const focused = useIsFocused();

    useEffect(() => {
        console.log({ auth })
        if (focused) {
            let payload = {
                "phone_number": auth?.userDetails?.phoneNumber,
                "operator_code": "NG0020001"
            };
            dispatch(fetchWalletBalance(payload));
        }
    }, [dispatch, focused])

    return (
        <ScrollView style={{ backgroundColor: neutral10 }} contentContainerStyle={styles.container} >

            <Text style={styles.title}>Hi {String(auth?.userDetails?.fullname).split(" ")[0] ?? "Awesome"},</Text>

            <View>
                <ScrollView style={styles.accountList} horizontal showsHorizontalScrollIndicator={false}>

                    <View style={{ ...styles.balanceCard, backgroundColor: "#eff5ff" }}>
                        <Text style={[styles.balanceText, { color: primary }]}>Current Balance</Text>
                        <Text style={[styles.amount, { color: primary }]}>₦ {balance?.main ?? 0}. 00</Text>

                        <View style={styles.bottom}>
                            <Text style={[styles.balanceText, { color: primary + 90 }]}>Wallet</Text>
                        </View>
                    </View>

                    <View style={{ ...styles.balanceCard, backgroundColor: "#eff5ff" }}>
                        <Text style={[styles.balanceText, { color: primary }]}>Current Balance</Text>
                        <Text style={[styles.amount, { color: primary }]}>₦ 0. 00</Text>

                        <View style={styles.bottom}>
                            {/* <Text style={[styles.balanceText, { color: primary + 90 }]}>OneStop MFB</Text> */}
                            <Text style={[styles.balanceText, { color: primary + 90 }]}>0020373938</Text>
                        </View>
                    </View>

                </ScrollView>
            </View>

            <Button label={"Fund"} buttonStyles={styles.buttonView} onPress={() => navigation.navigate("Services", { screen: "FundWallet" })} />

        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingVertical: 32,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    balanceCard: {
        padding: 16,
        borderRadius: 8,
        width: 0.8 * Dimensions.get("window").width,
        marginRight: 24
    },
    bottom: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 50,
    },
    balanceText: {
        fontSize: 12
    },
    amount: {
        fontWeight: "bold",
        fontSize: 20
    },
    buttonView: {
        marginTop: 30
    },
    accountList: {
        marginTop: 24,
        flexDirection: "row"
    }
})
