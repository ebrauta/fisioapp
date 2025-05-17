import { Colors } from "@/constants/Colors";
import { LIST_ITEM_HEIGHT } from "@/constants/Extras";
import { Consult } from "@/types/IConsult";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { BackButton } from "./button";
import { ConsultListItem } from "./item";

interface ConsultListProps {
    patient?: string
    consults: Consult[]
    handleClick: () => void
}

export const ConsultsList: React.FC<ConsultListProps> = ({ patient, consults, handleClick }) => {
    const handlePress = () => {
        handleClick();
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Consultas de {patient}</Text>
            <View style={{ maxHeight: 500 }}>
                <FlatList
                    data={consults}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ConsultListItem consult={item} />
                    )}
                    style={styles.container}
                    getItemLayout={(_, index) => ({
                        length: LIST_ITEM_HEIGHT,
                        offset: LIST_ITEM_HEIGHT * index,
                        index,
                    })}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <BackButton onPress={handlePress} />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.darkgreen,
        marginVertical: 10,
    },
});