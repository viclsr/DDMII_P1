import {useState} from 'react'
import { Text, SafeAreaView, StyleSheet, Image, TextInput, Button } from 'react-native';


export default function App() {
  const [alcool, setAlcool] = useState()
  const [gasolina, setGasolina] = useState()
  const [best, setBest] = useState('')


  function verificar(){
    if (alcool / gasolina < 0.7){
      setBest('Álcool')
    } else if (alcool / gasolina > 0.7){
      setBest('Gasolina')
    } else {
      alert('Digite o preço da gasolina e do álcool')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Álcool ou Gasolina
      </Text>
      <Image
      source={{
            uri: 'https://cdn.autopapo.com.br/box/uploads/2022/09/29163853/gasolina-x-alcool-portal-732x488.jpg',
          }}
          style={{ width: 250, height: 200, margin: 10 }}
      />
        <TextInput
      style={styles.input}
      placeholder="Preço do álcool"
      onChangeText={setAlcool}
      />
      <TextInput
      style={styles.input}
      placeholder="Preço da gasolina"
      onChangeText={setGasolina}
      />


    <Button title="Verificar" onPress={verificar} />


    <Text style={styles.texto}> {best} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    display: 'flex',
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    input:{
    height: 40,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    marginTop: 10,
    textAlign: 'center',
    fontSize: 25,
    color: '#8B0000'
  }
});
