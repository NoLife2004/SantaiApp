import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Screens
import Home from "./pages/Home";
import Task from './pages/Task';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Task')}
                style={{ marginRight: 15 }}
              >
                <Ionicons name="add" size={28} color="#0074FF" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Task" 
          component={Task}
          options={{ title: 'Add/Edit Task' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}