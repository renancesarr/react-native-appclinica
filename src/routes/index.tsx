import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import Home from '../pages/home';
import Favoritos from '../pages/favoritos';
import Consultas from '../pages/consultas';
import Perfil from '../pages/perfil';

const Tabs = createBottomTabNavigator();
const HomeRouter = createStackNavigator();

function HomeStack() {
  return (
    <HomeRouter.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <HomeRouter.Screen name="Home" component={Home} options={{ title: 'Home Page' }} />
    </HomeRouter.Navigator>
  )
}

const TabsRoutes: React.FC = () => (
  <Tabs.Navigator

    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Exames') {
          iconName = 'mail';
        } else if (route.name === 'Consultas') {
          iconName = 'slack';
        } else {
          iconName = 'user'
        }

        // You can return any component that you like here!
        return <FeatherIcon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{

      style: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        maxHeight: 100,
        zIndex: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 7,
      },
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    }}>
    <Tabs.Screen name="Home"
      component={HomeStack}
    />
    <Tabs.Screen name="Exames" component={Login} />
    <Tabs.Screen name="Consultas" component={Login} />
    <Tabs.Screen name="Perfil" component={Login} />
  </Tabs.Navigator >
);

export default TabsRoutes;

