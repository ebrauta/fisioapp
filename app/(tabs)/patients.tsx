import { ConsultsList } from '@/components/ConsultsList';
import { FormAddPatient } from '@/components/FormAddPatient';
import { PatientList } from '@/components/PatientList';
import { UIButton } from '@/components/UI/Button';
import { ConsultsData } from '@/constants/API';
import { Colors } from '@/constants/Colors';
import { Consult } from '@/types/IConsult';
import { Patient } from '@/types/IPatient';
import { useEffect, useState } from 'react';
import { Modal, StatusBar, StyleSheet, Text, View } from 'react-native';


export default function PatientScreen() {
  const [showConsults, setShowConsults] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient>();
  const [consults, setConsults] = useState<Consult[]>([]);
  const [showAdd, setShowAdd] = useState<boolean>(false)

  useEffect(() => {
    const fetchConsults = async () => {
      setConsults(ConsultsData);
    };
    fetchConsults();
  }, [ConsultsData]);

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
      <PatientList handleClick={handlePatientPress} />
      <UIButton label='Adicionar Paciente' handleClick={() => setShowAdd(true)} />
      {showAdd && <FormAddPatient handleClose={() => setShowAdd(false)}/>}
      {showConsults && selectedPatient && (
        <Modal onDismiss={handleConsultPress}>
          <ConsultsList patient={selectedPatient} consults={consults} handleClose={handleConsultPress} />
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
  }
});