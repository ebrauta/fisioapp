import { ConsultsList } from '@/components/ConsultsList';
import { PatientList } from '@/components/PatientList';
import { ConsultsData } from '@/constants/API';
import { Colors } from '@/constants/Colors';
import { LIST_ITEM_HEIGHT } from '@/constants/Extras';
import { Consult } from '@/types/IConsult';
import { Patient } from '@/types/IPatient';
import { useEffect, useState } from 'react';
import { Modal, StatusBar, StyleSheet, Text, View } from 'react-native';


export default function PatientScreen() {
  const [showConsults, setShowConsults] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient>();
  const [consults, setConsults] = useState<Consult[]>([]);

  useEffect(() => {
    const fetchConsults = async () => {
      setConsults(ConsultsData);
    };
    fetchConsults();
  }, []);

  const handlePatientPress = (item: Patient) => {
    setShowConsults(true);
    setSelectedPatient(item)
    const FilterConsults = ConsultsData
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .filter((consult) => consult.patientId == item.id)
    setConsults(FilterConsults);
  };

  const handleConsultPress = () => {
    setShowConsults(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pacientes</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>Lista de Pacientes</Text>
        <PatientList handleClick={handlePatientPress} />
      </View>
      {showConsults && (
        <Modal onDismiss={handleConsultPress}>
          <ConsultsList patient={selectedPatient?.name} consults={consults} handleClick={handleConsultPress} />
        </Modal>
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightgreen,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight : 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.darkgreen,
    marginVertical: 10,
  },
  listView: {
    height: LIST_ITEM_HEIGHT * 10 + 20,
    borderWidth: 2,
    borderColor: Colors.darkgreen,
    borderRadius: 8
  },
  listTitle: {
    padding: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textDecorationStyle: 'double',
    textDecorationColor: Colors.darkgreen,
    textDecorationLine: 'underline'
  },
});