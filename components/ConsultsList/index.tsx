import { Colors } from "@/constants/Colors";
import { LIST_ITEM_HEIGHT } from "@/constants/Extras";
import { Consult } from "@/types/IConsult";
import { Patient } from "@/types/IPatient";
import { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FormAddConsult } from "../FormAddConsult";
import { UIButton } from "../UI/Button";
import { ConsultListItem } from "./item";

interface ConsultListProps {
    patient: Patient
    consults: Consult[]
    handleClose: () => void
}

export const ConsultsList: React.FC<ConsultListProps> = ({ patient, consults, handleClose }) => {
    const [showAdd, setShowAdd] = useState<boolean>(false)
    const [consultList, setConsultList] = useState<Consult[]>([])

    useEffect(() => {
        if(consults) setConsultList(consults)
    }, [consults])

    const handleAdd = (patient: Patient) => {
        setShowAdd(true)
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
            <Text style={styles.title}>Consultas de {patient?.name}</Text>
            <View style={styles.listContainer}>
                <FlatList
                    data={consultList}
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
                label="Adicionar Consulta"
                handleClick={() => handleAdd(patient)}
            />
            <UIButton
                label="Voltar"
                iconName="arrow-back-outline"
                handleClick={handleClose}
            />
            {showAdd && (
                <FormAddConsult patient={patient} handleClose={() => setShowAdd(false)} />
            )}
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