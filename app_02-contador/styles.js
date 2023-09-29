import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    fontFamily: "Arial",
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%'
  },
 buttonContainer:{
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
 },
 numPessoas:{
   fontSize: '32px'
 }
});

export { styles };
