import React from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Onboarding from "react-native-onboarding-swiper";
import { Onboarding1, Onboarding2, Onboarding3 } from '../../../assets';
import { Button } from '../../../components';
import { theme } from '../../../theme';

const Onboard = ({ navigation }) => {
    const { neutral10, primary } = theme();
    const { height } = useWindowDimensions();

    return (
        <View style={{ flex: 1, backgroundColor: neutral10 }}>
            <View style={{ flex: 4 }}>
                <Onboarding
                    pages={[
                        {
                            backgroundColor: neutral10,
                            image:

                                <Onboarding1 />
                            ,
                            title: 'Pay Bills',
                            subtitle: 'Some piece of descriptive text describing a key feature of the app',
                        },
                        {
                            backgroundColor: neutral10,
                            image: <Onboarding2 />,
                            title: 'Send and Receive Money',
                            subtitle: 'Some piece of descriptive text describing a key feature of the app',
                        },
                        {
                            backgroundColor: neutral10,
                            image: <Onboarding3 />,
                            title: 'Bank Conveniently',
                            subtitle: 'Some piece of descriptive text describing a key feature of the app',
                        },
                    ]}
                    // showPagination
                    showDone={false}
                    bottomBarColor={neutral10}
                    controlStatusBar={false}
                    showNext={false}
                    showSkip={false}
                    containerStyles={{ marginTop: -0.4 * height, justifyContent: "flex-end" }}
                />
            </View>

            <View style={{ flex: 1, padding: 15 }}>
                <Button label={"Create Account"} onPress={() => navigation.navigate("SignUp")} />

                <View style={{ marginTop: 18, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{}}>
                        <Text style={{ color: primary }}>Already have an account? Sign In </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export { Onboard }