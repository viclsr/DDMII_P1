import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
function App() {
  const [resultado, setResultado] = useState('');

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  function multiplicar() {
    setResultado(input1 * input2);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de números</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o 1º número: "
        onChangeText={setInput1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o 2º número: "
        onChangeText={setInput2}
      />

      <Button title="Calcular" onPress={multiplicar} />

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>
  );
}

export default App;
