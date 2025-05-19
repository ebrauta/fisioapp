import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    label: string
    iconName?: any
    handleClick: () => void
}

export const UIButton: React.FC<ButtonProps> = ({ label, iconName, handleClick }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handleClick}>
            {iconName && <Ionicons name={iconName} size={28} style={styles.buttonText} />}
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        margin: 5,
        padding: 20,
        backgroundColor: Colors.darkgreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10
    },
    buttonText: {
        color: Colors.lightgreen,
        fontWeight: 'bold'
    }
})