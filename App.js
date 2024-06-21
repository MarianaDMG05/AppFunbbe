import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function FunbbeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColorcolor: "#212275" }}>
      <Text>FunBBe</Text>
      <Button 
        title='Fundação Barra Bonita de Ensino'
        onPress={() => props.navigation.navigate("Funbbe")}
        
         
      />
    </View>
  );
}
function ContatoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' ,backgroundColor:"#b2ddeb" }}>
      <Text>FALE CONOSCO:</Text>
      <Text>(14) 3641-2100</Text>
      <Text>(14) 3641-9711</Text>
      <Text>LOCALIZAÇÃO:</Text>
      <Text>Rua João Gerin, Nº 275 – Vila Operária Barra Bonita | 17340-190 | São Paulo, Brasil.</Text>
    </View>
  );
}
function QuemsomosScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', color:"rgb(29, 68 , 209)"}}>
      <Text>Nos somos a melhor escola!</Text>

      <Text>A Escolas Integradas ”Prof. Nivaldo Salch Stipp” é mantida pela FunBBE (Fundação Barra Bonita de Ensino), e tem sua sede na cidade de Barra Bonita, no interior do estado de São Paulo.</Text>

      <Text>Fundada em 1963, era conhecida como Colégio Comercial de Barra Bonita, não possuindo ainda uma estrutura bem definida. Somente em 1966 surge como personalidade jurídica, adequando-se à Lei 493 do ano em vigência, sancionada pelo então prefeito da época, Dr. Clodoaldo Antonângelo. Passa então a dispor sobre a criação da Fundação Barra Bonita de Ensino, ou como é popularmente conhecida, FunBBE, que passa a ser a instituição mantenedora do Colégio Comercial e dos demais cursos implementados por ela. 
      </Text>
    </View>
  );
}
function EquipeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"#ff0303", fontsize: 4 }}>
      <Text>Nossa equipe é repleta de FERAS!!!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Funbbe" component={FunbbeScreen} />
        <Drawer.Screen name="Contato" component={ContatoScreen} />
        <Drawer.Screen name="Quem somos" component={QuemsomosScreen} />
        <Drawer.Screen name="Equipe" component={EquipeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;