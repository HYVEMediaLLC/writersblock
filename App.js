import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Profile from './Profile';
import Feed from './Feed';
import Compose from './Compose';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import Feather from '@expo/vector-icons/Feather'

const MainTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarShowLabel: false, // Hide tab labels
        tabBarStyle: { backgroundColor: 'black' }, // Set background color to black
        tabBarActiveTintColor: 'white',

      }}
    >
      <Tab.Screen 
        name="Feed" 
        component={Feed} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (<Feather name="home" color={color} size={size} />) 
        }} 
      />
      <Tab.Screen 
        name="Compose" 
        component={Compose} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (<Feather name="edit-2" color={color} size={size} />) 
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (<Feather name="user" color={color} size={size} />) 
        }}
      />
    </Tab.Navigator>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerBackVisible={false}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
