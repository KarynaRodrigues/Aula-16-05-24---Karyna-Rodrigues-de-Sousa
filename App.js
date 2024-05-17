import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { CarProvider } from './Components/CarContext'

import CarCountComponent from './Components/CarCountComponent';
import CarInputComponent from './Components/CarInputComponent';
import CarListComponent from './Components/CarListComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <CarCountComponent />
      <CarListComponent/>
      <CarInputComponent/>
      <CarProvider/>
      <CarContext/>
      <StatusBar style='auto'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
