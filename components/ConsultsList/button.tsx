import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface BackButtonProps{
    onPress: () => void
}

export const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <Ionicons name='arrow-back-outline' style={styles.backButtonText} />
            <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        gap: 5,
        width: '100%',
        padding: 20,
        backgroundColor: Colors.darkgreen,
        marginTop: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButtonText: {
        color: Colors.lightgreen,
        fontWeight: 'bold',
        fontSize: 18
    }
})