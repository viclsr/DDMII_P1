import { View, Text, Image } from 'react-native';

function MeuPerfil() {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D4D03AQH9C4LexklprQ/profile-displayphoto-shrink_800_800/0/1665006146823?e=2147483647&v=beta&t=YYdJj5DC_3HCfmokJLjx4hcl0zvJb-raM-UKCKrodU8',
          }}
          style={{ width: 200, height: 200, margin: 45 }}
        />
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 16, color: '#811515', fontWeight: 'bold' }}>
          Dados Pessoais
        </Text>
        <Text>20 anos</Text>
        <Text>Rua General Rondon 26 ap 11 Aparecida </Text>
        <Text>CEP 11030570</Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 16, color: '#811515', fontWeight: 'bold' }}>
          Formação
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Superior - Sistemas para Internet Fatec Rubens Lara - Baixada Santista
        </Text>
        <Text style={{ fontWeight: '700', textAlign: 'center' }}>
          Jan.2021 - Dez.2023 ( Previsão de Formatura )
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 16, color: '#811515', fontWeight: 'bold' }}>
          Experiência
        </Text>
        <Text>Prefeitura de Itanhaém</Text>
        <Text style={{ fontWeight: '700' }}>Mar/2023 - Até o momento</Text>
        <Text style={{ textAlign: 'center' }}>
          Principais atividades: Auxiliar nas rotinas administrativas do setor,
          auxiliar no acompanhamento de relatórios, auxílio na configuração de
          hardware, auxílio nas rotinas gerais da área de TI
        </Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <Text style={{ fontSize: 16, color: '#811515', fontWeight: 'bold' }}>
          Projetos
        </Text>
        <Text style={{ fontWeight: 'bold' }}>Projeto Marvel</Text>
        <Text style={{ textAlign: 'center' }}>
          Projeto desenvolvido através do curso MapaDev Week, ministrado pelos
          DevEmDobro (Ricardo e Roberto). O projeto teve como objetivo criar um
          Character Select com personagens da Marvel, utilizando HTML, CSS e
          JavaScript
        </Text>
      </View>
    </View>
  );
}

export default MeuPerfil;