import { Colors } from "@/constants/Colors";
import { LIST_ITEM_HEIGHT } from "@/constants/Extras";
import { convertDate } from "@/lib/date";
import { Consult } from "@/types/IConsult";
import { StyleSheet, Text, View } from "react-native";

interface ConsultItemProps {
    consult: Consult;
}

const checkStatus = (status: 'completed' | 'pending') => {
    const statDef = {
        completed: {
            name: "Feito",
        },
        pending: {
            name: "Pendente",
        }
    }
    return <Text style={stylesConsult[status]}>{statDef[status]?.name}</Text>
}

export const ConsultListItem: React.FC<ConsultItemProps> = ({ consult }) => {
    return (
        <View style={stylesConsult.item}>
            <Text style={stylesConsult.itemText}>Data: {convertDate(consult.date)}</Text>
            <Text style={stylesConsult.itemText}>Hora: {consult.time}</Text>
            <Text style={stylesConsult.itemText}>Status: {checkStatus(consult.status)}</Text>
        </View>
    )
}

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
    completed: {
        color: 'green',
        fontWeight: 'bold'
    },
    pending: {
        color: 'red',
        fontWeight: 'bold'
    }
})