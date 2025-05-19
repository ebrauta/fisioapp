import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, TextInput, View } from "react-native"

interface InputProps {
    label: string
    value: string
    handleChange: (data: string) => void
}

export const UIInputText: React.FC<InputProps> = ({ label, value, handleChange }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput value={value} onChangeText={handleChange} style={styles.input}/> 
        </View>
    )
}

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