import { ConsultsData, HealthPlansData } from "@/constants/API";
import { LIST_ITEM_HEIGHT } from "@/constants/Extras";
import { convertDate } from "@/lib/date";
import { Consult } from "@/types/IConsult";
import { HealthPlan } from "@/types/IHealthPlan";
import { Patient } from "@/types/IPatient";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface PatientItemProps {
    patient: Patient;
    handlePress: (item: Patient) => void;
}

export const PatientListItem: React.FC<PatientItemProps> = ({ patient, handlePress }) => {
    const [healthPlan, setHealthPlans] = useState<HealthPlan>();
    const [numberOfConsults, setNumberOfConsults] = useState<number>(0)
    const [lastConsult, setLastConsult] = useState<Consult>()

    useEffect(() => {
        const fetchHealtPlans = async () => {
            setHealthPlans(HealthPlansData.find((plan) => plan.id == patient.planId));
        };
        fetchHealtPlans();
        const fetchConsults = async () => {
            const FilterConsults = ConsultsData.filter((consult) => consult.patientId == patient.id);
            setNumberOfConsults(FilterConsults.length)
            setLastConsult(FilterConsults.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).pop())
        }
    }, []);


    const stylesPatient = StyleSheet.create({
        item: {
            height: LIST_ITEM_HEIGHT * 2,
            borderBottomWidth: 2,
            borderColor: Colors.lightgreen,
            borderRadius: 8,
            paddingVertical: 10
        },
        itemTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 5,
            textAlign: 'center',
            color: Colors.darkgreen
        },
        itemSubTitle: {
            fontSize: 16,
            fontWeight: 'semibold',
            padding: 5,
            color: Colors.darkgreen
        },
        itemText: {
            fontStyle: 'italic',
            paddingHorizontal: 5,
            color: Colors.darkgreen
        }
    })

    return (
        <TouchableOpacity style={stylesPatient.item} onPress={() => handlePress(patient)}>
            <Text style={stylesPatient.itemTitle}>{patient.name}</Text>
            <Text style={stylesPatient.itemSubTitle}>{patient.age} anos - Plano: {healthPlan?.name}</Text>
            <Text style={stylesPatient.itemText}>Consultas: {numberOfConsults} - Ult. Consulta: {convertDate(lastConsult?.date)}</Text>
        </TouchableOpacity>
    )
};