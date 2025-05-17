import { PatientsData } from "@/constants/API"
import { Colors } from "@/constants/Colors"
import { LIST_ITEM_HEIGHT } from "@/constants/Extras"
import { Patient } from "@/types/IPatient"
import { useEffect, useState } from "react"
import { FlatList, StyleSheet } from "react-native"
import { PatientListItem } from "./item"

interface PatientListProps {
  handleClick: (item: Patient) => void
}

export const PatientList: React.FC<PatientListProps> = ({ handleClick }) => {
  const [patientsList, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    const fetchPatients = async () => {
      // Simulando uma chamada de API 
      // Aqui você pode fazer uma chamada real para buscar os pacientes
      // Exemplo: const response = await fetch('sua_api/pacientes');
      // const data = await response.json();
      // setPatients(data);
      // Para este exemplo, estamos apenas usando a lista estática
      setPatients(PatientsData);
    };
    fetchPatients();
  }, []);

  const handlePress = (item: Patient) => {
    handleClick(item);
  };

  return (
    <FlatList
      data={patientsList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PatientListItem patient={item} handlePress={handlePress} />}
      style={styles.container}
      getItemLayout={(_, index) => ({
        length: LIST_ITEM_HEIGHT,
        offset: LIST_ITEM_HEIGHT * index,
        index,
      })}
      showsVerticalScrollIndicator={false}
    />
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
  }
});