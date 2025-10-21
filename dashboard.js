import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './pages/Homepage';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        
        {}
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
        />
        
        {}
        <Stack.Screen 
          name="StudentList" 
          component={StudentList} 
        />
        
        {}
        <Stack.Screen 
          name="AddStudent" 
          component={AddStudent} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
