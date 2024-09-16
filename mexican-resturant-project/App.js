import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OrderProvider } from './context/OrderContext';
import OrderScreen from './Screens/OrderScreen';
import HistoryScreen from './Screens/HistoryScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen'; 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs({ setIsAuthenticated }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Orden') {
            iconName = 'check';
          } else if (route.name === 'Historial de Compras') {
            iconName = 'history';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orden" component={OrderScreen} />
      <Tab.Screen name="Historial de Compras" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <OrderProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuthenticated ? (
            <Stack.Screen name="HomeTabs">
              {() => <HomeTabs setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Login">
              {() => <LoginScreen setIsAuthenticated={setIsAuthenticated} />}
            </Stack.Screen>
          )}
          {/* Otras pantallas */}
        </Stack.Navigator>
      </NavigationContainer>
    </OrderProvider>
  );
}

export default App;