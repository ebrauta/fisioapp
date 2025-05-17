import { StyleSheet, Text, TextInput, View } from "react-native"

interface InputProps{
    label: string
    value: string
    handleChange: (data: string) => void
}

export const UIInputText: React.FC<InputProps> = ({ label, value, handleChange }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput value={value} onChangeText={handleChange} /> 
        </View>
    )
}

const styles = StyleSheet.create({
   
})