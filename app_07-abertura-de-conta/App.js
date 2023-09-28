import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  View,
  Button,
} from 'react-native';
import React, { useState } from 'react';

import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('Selecione uma opção');
  const [escolaridade, setEscolaridade] = useState('Selecione uma opção');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [dados, setDados] = useState('');

  function confirmar() {
    let d = `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nEscolaridade: ${escolaridade}\nLimite na conta: ${limite.toFixed(0)}\nBrasileiro: ${brasileiro ? 'Sim' : 'Não'}`;
    setDados(d);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}></Text>
       <TextInput
        style={styles.input}
        placeholder="Nome: "
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade: "
        onChangeText={setIdade}
        value={idade}
      />
      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue) => setSexo(itemValue)}>
        <Picker.Item label="Selecione uma opção" value="Selecione uma opção" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Masculino" value="Masculino" />
      </Picker>
       <Picker
        selectedValue={escolaridade}
        onValueChange={(itemValue) => setEscolaridade(itemValue)}>
        <Picker.Item label="Selecione uma opção" value="Selecione uma opção" />
        <Picker.Item label="Ensino fundamental" value="Ensino fundamental" />
        <Picker.Item label="Ensino médio" value="Ensino médio" />
        <Picker.Item label="Ensino superior" value="Ensino superior" />
      </Picker>

      <Button title="Confirmar" onPress={confirmar} />

      <Text style={styles}> {dados} </Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
        value={limite}
      />

      <Text style={{ textAlign: 'center', fontSize: 30 }}>
        {limite.toFixed(0)}
      </Text>

      <View
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 30 }}>Brasileiro </Text>
        <Switch
          value={brasileiro}
          onValueChange={(valorSwitch) => setBrasileiro(valorSwitch)}
          thumbColor="orange"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 1,
  },
});
