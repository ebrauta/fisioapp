import { Colors } from "@/constants/Colors";
import { HealthPlan } from "@/types/IHealthPlan";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface SelectProps {
    value?: string;
    onChange: (data: number) => void
    options: HealthPlan[]
}

export const UISelect: React.FC<SelectProps> = ({ value,  options, onChange }) => {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <>
                <TouchableOpacity style={styles.select} onPress={() => setVisible(true)}>
                    <Text>{value ? value : "Selecione"}</Text>
                    <Feather name="arrow-down" size={16} color="#000" />
                </TouchableOpacity>
                <Modal
                    visible={visible}
                    transparent={true}
                    animationType="fade"
                    onRequestClose={() => setVisible(false)}>
                    <TouchableOpacity style={styles.modalContainer} activeOpacity={1}
                        onPress={() => setVisible(false)}>
                        <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
                            <FlatList
                                contentContainerStyle={{ gap: 4 }}
                                data={options}
                                keyExtractor={(item) => item.name.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        style={styles.option}
                                        onPress={() => {
                                            onChange(item.id)
                                            setVisible(false)
                                        }}>
                                        <Text>{item.name}</Text>
                                    </TouchableOpacity>
                                )}></FlatList>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    errorText: {
        color: 'red',
        marginTop: 4
    },
    select: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 4
    },
    modalContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: Colors.white,
        marginHorizontal: 10,
        borderRadius: 8,
        padding: 20
    },
    option: {
        paddingVertical: 14,
        backgroundColor: 'rgba(208,208,208,0.40)',
        borderRadius: 4,
        paddingHorizontal: 8
    }
})