import { ConsultsData } from "@/constants/API"
import { Colors } from "@/constants/Colors"
import { Consult } from "@/types/IConsult"
import { Patient } from "@/types/IPatient"
import { useState } from "react"
import { Modal, StyleSheet, Text, View } from "react-native"
import { UIButton } from "../UI/Button"
import UIDatePickerInput from "../UI/DatePicker"

interface FormAddConsultProps {
    patient: Patient
    handleClose: () => void
}

export const FormAddConsult: React.FC<FormAddConsultProps> = ({ patient, handleClose }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [date, setDate] = useState<string>("")

    const [modalVisible, setModalVisible] = useState<boolean>(true);

    const handleSave = async () => {
        const newConsult: Consult = {
            id: ConsultsData.length + 1,
            patientId: patient.id,
            date,
            type: "default"
        }
        //Simulando salvamento no banco
        setLoading(true)
        setTimeout(() => {
            ConsultsData.push(newConsult)
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
                    <Text style={style.title}>Adicionar Consulta</Text>
                    <View style={style.inputGroup}>
                        <UIDatePickerInput label="Data da Consulta" handleChange={setDate} value={date} placeholder="Selecione uma data" />
                    </View>
                    <View style={style.buttonGroup}>
                        <UIButton
                            label="Salvar"
                            iconName="save-outline"
                            handleClick={handleSave}
                            disabled={!date.trim()}
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
    inputGroup: {
        width: '95%',
        height: '70%',
    },
    buttonGroup: {
        width: '100%',
        height: '20%'
    }
})