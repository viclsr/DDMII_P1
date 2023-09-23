import { View, Text, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
function App() {
  const [resultado, setResultado] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  function calcular() {
    setResultado(peso / (altura * altura));
  }

  function classificar() {
    if (resultado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      setClassificacao('Peso normal');
    } else if (resultado >= 25 && resultado <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (resultado >= 30 && resultado <= 34.9) {
      setClassificacao('Obesidade Grau I');
    } else if (resultado >= 35 && resultado <= 39.9) {
      setClassificacao('Obesidade Grau II');
    } else {
      setClassificacao('Obesidade Grau III ou Mórbida');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3uACZNVuXFKF391H_zML4R96AgR2WgRx-xmQA3kGMEM2rshcRDLe0vHhe1rnMuMQm2o&usqp=CAU',
        }}
        style={{ width: '100%', height: 200, margin: 10 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso: "
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura: "
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={classificar} />
      <Text style={styles.resultado}>Classificação: {classificacao}</Text>
    </View>
  );
}

export default App;
