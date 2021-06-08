import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { theme } from '../../theme'

const Button = ({ label, onPress, buttonStyles, textStyle, disabled, loading, ...rest }) => {
    const { primary, neutral10 } = theme();
    return (
        <TouchableOpacity onPress={disabled ? null : onPress} style={[{ backgroundColor: disabled ? primary + 20 : primary }, styles.main, buttonStyles]} {...rest}>
            <Text style={[{ color: neutral10 }, styles.text, textStyle]}>{loading ? "processing" : label}</Text>
            {loading ? <ActivityIndicator size={20} color={neutral10} style={{ marginLeft: 20 }} /> : null}
        </TouchableOpacity>
    )
}

export { Button }

const styles = StyleSheet.create({
    main: {
        padding: 16, width: "100%", borderRadius: 8, flexDirection: "row", justifyContent: "center"
    },
    text: {
        textAlign: "center", fontWeight: 'bold'
    }
})
