import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  View,
  Button,
} from 'react-native';
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
  const [confirmado, setConfirmado] = useState(false);

  function confirmar() {
    setConfirmado(true);
    let d = `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nEscolaridade: ${escolaridade}\nLimite na conta: R$ ${limite.toFixed(
      0
    )}\nBrasileiro: ${brasileiro ? 'Sim' : 'Não'}`;
    setDados(d);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput style={styles.input} onChangeText={setNome} value={nome} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput style={styles.input} onChangeText={setIdade} value={idade} />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Sexo: </Text>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
          style={styles.picker}>
          <Picker.Item
            label="Selecione uma opção"
            value="Selecione uma opção"
          />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Masculino" value="Masculino" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={(itemValue) => setEscolaridade(itemValue)}
          style={styles.picker}>
          <Picker.Item
            label="Selecione uma opção"
            value="Selecione uma opção"
          />
          <Picker.Item label="Ensino fundamental" value="Ensino fundamental" />
          <Picker.Item label="Ensino médio" value="Ensino médio" />
          <Picker.Item label="Ensino superior" value="Ensino superior" />
        </Picker>
      </View>
      <View>
        <View style={styles.sliderContainer}>
          <Text style={styles.label}>Limite</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
            value={limite}
          />
        </View>
        <Text style={styles.valorLimite}>{limite.toFixed(0)}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Brasileiro</Text>
        <Switch
          value={brasileiro}
          onValueChange={(valorSwitch) => setBrasileiro(valorSwitch)}
          thumbColor="grey"
        />
      </View>
      <Button title="Confirmar" onPress={confirmar} />
      {confirmado && <Text style={styles.confirmado}>Dados informados:</Text>}
      <Text style={styles.dados}>{dados}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    paddingLeft: 7,
    height: 45,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#222',
    fontSize: 18,
  },
  label: {
    fontSize: 18,
  },
  pickerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  picker: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
  },
  sliderContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: 300,
  },
  valorLimite: {
    fontSize: 24,
    textAlign: 'center',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 30,
  },
  confirmado: {
    fontSize: 20,
    color: 'blue',
    marginTop: 20,
  },
  dados: {
    fontSize: 18,
    marginVertical: 16,
  },
});
