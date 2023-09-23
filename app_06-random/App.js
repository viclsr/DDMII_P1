import { View, Text, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
function App() {
  const [resultado, setResultado] = useState('');

  function gerarNumero() {
    setResultado(Math.floor(Math.random() * 11));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo do Nº Aleatório</Text>
      <Image
        source={{
          uri: 'https://4.bp.blogspot.com/-fWMrXYoBo40/XHg6QKn5xGI/AAAAAAAAAsE/XmKhYdECzhQar9E5aI_PkFMjRkcjDRCoQCLcBGAs/s1600/random_numbers2.png',
        }}
        style={{ width: '100%', height: 200, margin: 10 }}
      />
      <Text>Pense em um nº de 0 a 10</Text>

      <Button title="Descobrir" color="green" onPress={gerarNumero} />
      <Text style={styles.resultado}>{resultado}</Text>

    </View>
  );
}

export default App;
