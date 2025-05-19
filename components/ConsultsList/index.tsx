import { Colors } from "@/constants/Colors";
import { LIST_ITEM_HEIGHT } from "@/constants/Extras";
import { Consult } from "@/types/IConsult";
import { useCallback } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { UIButton } from "../UI/Button";
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

    const renderItem = useCallback(
        ({ item }: { item: Consult }) => <ConsultListItem consult={item} />,
        []
    );

    const keyExtractor = useCallback(
        (item: Consult) => item.id.toString(),
        []
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Consultas de {patient}</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={consults}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    style={styles.container}
                    getItemLayout={(_, index) => ({
                        length: LIST_ITEM_HEIGHT,
                        offset: LIST_ITEM_HEIGHT * index,
                        index,
                    })}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text style={{ textAlign: "center", color: Colors.gray, marginVertical: 20 }}>
                            Nenhuma consulta encontrada.
                        </Text>
                    }
                />
            </View>
            <UIButton
                label="Voltar"
                iconName="arrow-back-outline"
                handleClick={handleClick}
            />
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
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.darkgreen,
        marginVertical: 10,
    },
    listContainer: {
        maxHeight: 500,
    },
});