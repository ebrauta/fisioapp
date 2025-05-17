import { ConsultsData, PatientsData } from '@/constants/API';
import { Colors } from '@/constants/Colors';
import { StatusBar, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
      <Text style={{ fontSize: 20, marginVertical: 20, color: Colors.darkgreen }}>
        Pacientes cadastrados no sistema: {PatientsData.length}
      </Text>
      <Text style={{ fontSize: 20, marginVertical: 20, color: Colors.darkgreen }}>
        Avaliações feitas: {ConsultsData.filter((consult) => consult.type == 'evaluation').length}
      </Text>
      <Text style={{ fontSize: 20, marginVertical: 20, color: Colors.darkgreen }}>
        Atendimentos feitos: {ConsultsData.filter((consult) => consult.type == 'default').length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.lightgreen
  },
  title: {
    width: '100%',
    padding: 20,
    backgroundColor: Colors.darkgreen,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 20,
    textAlign: 'justify',
  }
});
