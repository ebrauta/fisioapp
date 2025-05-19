import { HealthPlansData, PatientsData } from "@/constants/API"
import { Colors } from "@/constants/Colors"
import { HealthPlan } from "@/types/IHealthPlan"
import { useEffect, useState } from "react"
import { Modal, StyleSheet, Text, View } from "react-native"
import { UIButton } from "../UI/Button"
import { UIInputText } from "../UI/InputText"
import { UISelect } from "../UI/Select"

interface FormAddPatientProps {
    handleClose: () => void
}

export const FormAddPatient: React.FC<FormAddPatientProps> = ({ handleClose }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [healthPlan, setHealthPlan] = useState<HealthPlan>()

    const [healthPlanList, setHealthPlanList] = useState<HealthPlan[]>([])
    const [modalVisible, setModalVisible] = useState<boolean>(true);

    useEffect(() => {
        const fetchHealthPlan = async () => {
            // Simulando uma chamada de API 
            // Aqui você pode fazer uma chamada real para buscar os pacientes
            // Exemplo: const response = await fetch('sua_api/pacientes');
            // const data = await response.json();
            // setPatients(data);
            // Para este exemplo, estamos apenas usando a lista estática
            const data = HealthPlansData.sort((a, b) => a.id - b.id)
            setHealthPlanList(data);
        };
        fetchHealthPlan();
    }, []);

    const handleChangePlan = (data: number) => {
        const health = healthPlanList.find((plan) => plan.id === data)
        setHealthPlan(health)
    }

    const handleSave = async () => {
        //Simulando salvamento no banco
        setLoading(true)
        setTimeout(() => {
            PatientsData.push({
                id: PatientsData.length + 1,
                name,
                physiotherapistId: 1,
                finished: false,
                planId: healthPlan?.id
            })
            setLoading(false)
            handleClose()
        }, 3000)
    }

    return (
        <Modal
            visible={modalVisible}
            onRequestClose={handleClose}
            animationType="slide"
            transparent={false}
        >
            {loading && <Text>Salvando...</Text>}
            {!loading && (
                <View style={style.container}>
                    <Text style={style.title}>Adicionar Paciente</Text>
                    <View style={style.inputGroup}>
                        <UIInputText label="Nome" handleChange={setName} value={name} />
                        <UISelect label="Plano de Saúde" value={healthPlan?.name} options={healthPlanList} onChange={(e) => handleChangePlan(e)} />
                    </View>
                    <View style={style.buttonGroup}>
                        <UIButton
                          label="Salvar"
                          iconName="save-outline"
                          handleClick={handleSave}
                          disabled={!name.trim() || !healthPlan}
                        />
                        <UIButton label="Voltar" iconName="arrow-back-outline" handleClick={handleClose} />
                    </View>
                </View>
            )}
        </Modal>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkgreen
    },
    inputGroup:{
        width: '95%',
        height: '70%',
    },
    buttonGroup: {
        width: '100%',
        height: '20%'
    }
})