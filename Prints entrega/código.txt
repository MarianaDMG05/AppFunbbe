import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function FunbbeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Image source={require("../appFunbbe/assets/logo.png")} style={{width:150, resizeMode: "contain", marginTop:-35}} />
      <Button 
        title='Fundação Barra Bonita de Ensino'
        onPress={() => navigation.navigate("Ensino")}       
      />
    </View>
  );
}

function FundacaoBarraBonitadeEnsinoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: "rgb(29, 68 , 209)" }}>
      <Text style={{ fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold'}}>Integração das atividades,melhores resultados no começo,desvendando cultura,corpo docente capacitado.</Text>
      <Text style={{fontSize: 15}}>A FunBBe adota o Sistema Anglo de Ensino, que segue uma abordagem educacional integrada e multidisciplinar alinhada ao Referencial Curricular do MEC. O sistema enfatiza o desenvolvimento de habilidades essenciais como leitura, escrita, matemática, e compreensão do ambiente natural e social desde os primeiros anos escolares. Além disso, valoriza a apreciação de manifestações artísticas como artes visuais e música, e introduz os alunos ao patrimônio cultural, incluindo compositores clássicos, artistas regionais e vestígios de antigas civilizações. O corpo docente recebe suporte através de manuais teóricos, planejamento de aulas e treinamentos presenciais conduzidos pelos autores do material, assegurando uma implementação consistente e eficaz do currículo educacional.</Text>
      
    </View>
  );
}

function ContatoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: "#b2ddeb" }}>
      <Text style={{ fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold', color:'3, 28, 252'}}>FALE CONOSCO:</Text>
      <Text>(14) 3641-2100</Text>
      <Text>(14) 3641-9711</Text>
      <Text>LOCALIZAÇÃO:</Text>
      <Text>Rua João Gerin, Nº 275 – Vila Operária Barra Bonita | 17340-190 | São Paulo, Brasil.</Text>
    </View>
  );
}

function QuemsomosScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: "rgb(29, 68 , 209)" }}>
      <Text style={{ fontFamily: 'Arial', fontSize: 20, fontWeight: 'bold'}}>Nós somos a melhor escola</Text>
      <Text>A Escola Integrada "Prof. Nivaldo Salch Stipp" é mantida pela FunBBE (Fundação Barra Bonita de Ensino), e tem sua sede na cidade de Barra Bonita, no interior do estado de São Paulo.</Text>
      <Text>Fundada em 1963, era conhecida como Colégio Comercial de Barra Bonita, não possuindo ainda uma estrutura bem definida. Somente em 1966 surgiu como personalidade jurídica, adequando-se à Lei 493 do ano em vigência, sancionada pelo então prefeito da época, Dr. Clodoaldo Antonângelo. Passa então a dispor sobre a criação da Fundação Barra Bonita de Ensino, ou como é popularmente conhecida, FunBBE, que passa a ser a instituição mantenedora do Colégio Comercial e dos demais cursos implementados por ela.</Text>
    </View>
  );
}

function EquipeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: "#c3c7eb" }}>
      <Text>Nossa equipe é repleta de FERAS!!!</Text>
      <Text style={{fontFamily:'Arial', fontSize: 15,justifyContent:'flex-start'}} >Temos professores desde o infantil ao médio, sendo vários deles com muito tempo de casa</Text>
      <Text>Infantil 1 e 2</Text>
        <Text>Professores:</Text>
        <Text>-Ângela Maria Galli</Text>
        <Text>-Aline F. Rodrigues</Text> 
        <Text>-Ana Paula Prudente</Text>
        <Text>-Bruna Maiara Paiva</Text>
        <Text>-Gyovanna R. Bonani</Text>
        <Text>-Marizete de Oliveira Pereira</Text>
        <Text>-Nilceia Alves Paschoal</Text>
        <Text>-Taisa de Souza Fernandes</Text>
        <Text>-Valquiria de Lima Crotti</Text>
        <Text>-Caue Felipe Astolfo;</Text>
      <Text>-Emilia Santos Barreto</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Funbbe">
        <Drawer.Screen name="Funbbe" component={FunbbeScreen} />
        <Drawer.Screen name="Ensino" component={FundacaoBarraBonitadeEnsinoScreen} options={{title: "Fundação Barra Bonita de Ensino"}} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
        <Drawer.Screen name="QuemSomos" component={QuemsomosScreen} options={{title: "Quem Somos"}} />
        <Drawer.Screen name="Equipe" component={EquipeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;