import { Colors } from "@/constants/Colors";
import { LIST_ITEM_HEIGHT } from "@/constants/Extras";
import { convertDate } from "@/lib/date";
import { Consult } from "@/types/IConsult";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ConsultItemProps {
    consult: Consult;
}

export const ConsultListItem = React.memo<ConsultItemProps>(({ consult }) => {
    const formattedDate = convertDate(consult.date ?? '');
    return (
        <View
            style={stylesConsult.item}
            testID="consult-list-item"
            accessibilityRole="none"
            accessibilityLabel={`Consulta em ${formattedDate}${consult.type !== "default" ? ', Avaliação' : ''}`}
        >
            <Text
                style={stylesConsult.itemText}
                testID="consult-date"
                accessibilityRole="text"
                accessibilityLabel={`Data da consulta: ${formattedDate}`}
            >
                Data: {formattedDate}
            </Text>
            {consult.type !== "default" && (
                <Text
                    style={StyleSheet.flatten([
                        stylesConsult.evaluation,
                        consult.type === "evaluation" && { backgroundColor: Colors.lightgreen }
                    ])}
                    testID="consult-evaluation"
                    accessibilityRole="text"
                    accessibilityLabel="Avaliação"
                >
                    Avaliação
                </Text>
            )}
        </View>
    );
});

const stylesConsult = StyleSheet.create({
    item: {
        height: LIST_ITEM_HEIGHT * 1.2,
        borderBottomWidth: 2,
        borderColor: Colors.lightgreen,
        borderRadius: 8,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    itemText: {
        fontStyle: 'italic',
        paddingHorizontal: 5,
        color: Colors.darkgreen
    },
    evaluation:{
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: Colors.darkgreen
    }
})