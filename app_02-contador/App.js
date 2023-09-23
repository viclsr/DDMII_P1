import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [numPessoas, setNumPessoas] = useState(0);

  function aumentar() {
    setNumPessoas(numPessoas + 1);
  }

  function diminuir() {
    if(numPessoas <= 0 ){
      return
    }
    setNumPessoas(numPessoas - 1);
  }

  return (
    <View style={styles.container}>
      <h1>Contador de pessoas</h1>
      <Text style={styles.numPessoas} >{numPessoas}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Aumentar" onPress={aumentar} color="green" />
        <Button title="Diminuir" onPress={diminuir} color="red" />
      </View>
    </View>
  );
}
