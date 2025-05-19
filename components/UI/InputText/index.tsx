import { Colors } from "@/constants/Colors"
import React from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

interface InputProps {
    label: string
    value: string
    handleChange: (data: string) => void
    placeholder?: string
}

export const UIInputText = React.memo<InputProps & React.ComponentProps<typeof TextInput>>(
    ({ label, value, handleChange, placeholder, ...rest }) => {
        return (
            <View>
                <Text
                    style={styles.label}
                    accessible={true}
                    accessibilityRole="text"
                    accessibilityLabel={label}
                >
                    {label}
                </Text>
                <TextInput
                    value={value}
                    onChangeText={handleChange}
                    style={styles.input}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                    accessible={true}
                    accessibilityLabel={label}
                    accessibilityRole="search"
                    {...rest}
                />
            </View>
        )
    }
)

const styles = StyleSheet.create({
    label:{
        color: Colors.darkgreen,
        padding: 5,
        fontWeight: 900,
        fontSize: 16
    },
    input: {
        borderWidth: 1,
        borderColor: Colors.darkgreen,
        borderRadius: 8,
        padding: 10,
        fontWeight: 700,
        color: Colors.darkgreen
    }
})