import { HealthPlansData, PatientsData } from "@/constants/API"
import { HealthPlan } from "@/types/IHealthPlan"
import { useEffect, useState } from "react"
import { Modal, Text, View } from "react-native"
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

    const [healthPlantList, setHealthPlanList] = useState<HealthPlan[]>([])

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
        let health;
        if(data){
            health = healthPlantList.find((plan) => plan.id === data)
        } else {
            health = healthPlantList.find((plan) => plan.id === 1 )
        }
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
        }, 3000)
        setLoading(false)
        handleClose()
    }

    return (
        <Modal>
            {loading && <Text>Salvando...</Text>}
            {!loading && (
                <View>
                    <Text>Adicionar Paciente</Text>
                    <UIInputText label="Nome" handleChange={setName} value={name} />
                    <UISelect value={healthPlan?.name} options={healthPlantList} onChange={(e) => handleChangePlan(e)} />
                    <UIButton label="Salvar" iconName="save-outline" handleClick={handleSave} />
                    <UIButton label="Voltar" iconName="arrow-back-outline" handleClick={handleClose} />
                </View>
            )}
        </Modal>
    )
}