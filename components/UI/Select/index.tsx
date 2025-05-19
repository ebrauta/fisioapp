import { Colors } from "@/constants/Colors";
import { HealthPlan } from "@/types/IHealthPlan";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";

interface SelectProps {
    label?: string;
    value?: string;
    onChange: (data: number) => void
    options: HealthPlan[]
}

export const UISelect: React.FC<SelectProps> = ({ label, value, options, onChange }) => {
    const [visible, setVisible] = useState<boolean>(false)

    const renderItem = useCallback(
        ({ item }: { item: HealthPlan }) => (
            <TouchableOpacity
                style={[
                    style.option,
                    value === item.name && style.selectedOption
                ]}
                onPress={() => {
                    onChange(item.id)
                    setVisible(false)
                }}
                accessible={true}
                accessibilityLabel={`Select ${item.name}`}
                accessibilityRole="button"
                testID={`ui-select-option-${item.id}`}
            >
                <Text style={style.selectText}>{item.name}</Text>
            </TouchableOpacity>
        ),
        [onChange, setVisible, value]
    );

    return (
        <>
            <Text style={style.label}>{label}</Text>
            <TouchableOpacity
                style={style.select}
                onPress={() => setVisible(true)}
                accessible={true}
                accessibilityLabel={label ? `${label} selector` : "Selector"}
                accessibilityRole="button"
                testID="ui-select-button"
            >
                <Text style={style.selectText}>{value ? value : "Selecione"}</Text>
                <Feather name="arrow-down" size={16} color={Colors.darkgreen} />
            </TouchableOpacity>
            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setVisible(false)}
                testID="ui-select-modal"
            >
                <TouchableOpacity style={style.modalContainer} activeOpacity={1}
                    onPress={() => setVisible(false)}>
                    <TouchableOpacity style={style.modalContent} activeOpacity={1}>
                        <FlatList
                            contentContainerStyle={{ gap: 4 }}
                            data={options}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={renderItem}
                        />
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

const style = StyleSheet.create({
    label: {
        color: Colors.darkgreen,
        padding: 5,
        fontWeight: 900,
        fontSize: 16
    },
    errorText: {
        color: 'red',
        marginTop: 4
    },
    select: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.darkgreen,
        borderRadius: 8,
        padding: 10,
        justifyContent: 'space-between'
    },
    selectText:{
        fontWeight: 700,
        color: Colors.darkgreen
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
    },
    selectedOption: {
        backgroundColor: Colors.lightgreen,
    }
})