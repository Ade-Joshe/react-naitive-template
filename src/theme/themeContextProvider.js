import React, { useState } from 'react';
import { ThemeContext } from './themeContext';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native';

export const ThemeContextProvider = props => {

    const theme = {
        light: {
            type: 'light',
            primary: '#020181',
            b200: '#6694F6',
            black: '#000000',
            borderColor: "rgba(170, 183, 198, 0.2)",
            darkText: '#353F50',
            neutral30: '#AAB7C6',
            neutral20: '#F3F5F6',
            neutral10: '#FFFFFF',
        },
        dark: {
            type: 'dark',
            primary: '#212121',
            text: '#ffffff'
        }
    }

    const setTheme = type => {
        setState({ ...state, theme: type === 'dark' ? theme.light : theme.dark });
    }

    const initState = () => {
        let setLin = AsyncStorage.getItem('theme');
        if (setLin && setLin.theme) {
            return {
                theme: theme[setLin.type],
                setTheme: setTheme
            }
        }
        else {
            return {
                theme: theme.light,
                setTheme: setTheme
            }
        }
    }

    const [state, setState] = useState(initState)

    return (
        <ThemeContext.Provider value={state}>
            <SafeAreaView style={{ flex: 1, backgroundColor: state.theme.neutral10 }}>
                {props.children}
            </SafeAreaView>
        </ThemeContext.Provider>
    )
}