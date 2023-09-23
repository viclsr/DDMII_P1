import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  View,
  Button,
} from 'react-native';
import React, { Component, useState } from 'react';

import { Card } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import AssetExample from './components/AssetExample';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  let escolaridades = [
    { id: 1, nome: 'Selecione uma opção' },
    { id: 2, nome: 'Ensino fundamental' },
    { id: 3, nome: 'Ensino médio' },
    { id: 4, nome: 'Ensino superior' },
  ];

  const [escolaridade, setEscolaridade] = useState(0);
  const [status, setStatus] = useState(false);

  const [nome, setNome] = useState('');
  const [inputNome, setInputNome] = useState('');

  const [idade, setIdade] = useState('');
  const [inputIdade, setInputIdade] = useState('');

  let initial_sexos = [
    { id: 1, nome: 'Selecione uma opção' },
    { id: 2, nome: 'Feminino' },
    { id: 3, nome: 'Masculino' },
  ];

  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState(initial_sexos);

  const [valor, setValor] = useState(0);
  const [dados, setDados] = useState('');

  function entrar() {
    let d = 'Nome: ' + nome + '\nLimite: ' + valor;
    setDados(d);
  }

  let sexosItem = sexos.map((slider, chave) => {
    return <Picker.Item key={chave} value={slider.id} label={slider.nome} />;
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}></Text>
      <TextInput
        style={styles.input}
        placeholder="Nome: "
        onChangeText={setInputNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade: "
        onChangeText={setInputIdade}
      />
      <Picker
        selectedValue={sexo + 1}
        onValueChange={(itemValue, itemIndex) => setSexo(itemIndex)}>
        {sexosItem}
      </Picker>
      <Button title="Entrar" onPress={entrar} />

      <Text style={styles}> {dados} </Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
        value={valor}
      />

      <Text style={{ textAlign: 'center', fontSize: 30 }}>
        {valor.toFixed(0)}
      </Text>

      <View
        style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 30 }}>Brasileiro </Text>
        <Switch
          value={status}
          onValueChange={(valorSwitch) => setStatus(valorSwitch)}
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
