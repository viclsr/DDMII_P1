import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    height: '100%',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: '20px',
    marginBottom: '10px'
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 16,
    padding: 10,
    marginBottom: 10,
  },
  resultado:{
    margin: '10px 0',
    fontSize: 30,
  }
});

export { styles };
