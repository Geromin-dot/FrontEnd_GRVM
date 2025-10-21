import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import components
import Homepage from './pages/Homepage';
import StudentList from './pages/StudentList';
import AddStudent from './pages/AddStudent';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        
        {/* Homepage - Uses default header (Title: Homepage) */}
        <Stack.Screen 
          name="Homepage" 
          component={Homepage} 
        />
        
        {/* StudentList (Axios GET) - Uses default header (Title: StudentList) */}
        <Stack.Screen 
          name="StudentList" 
          component={StudentList} 
        />
        
        {/* AddStudent (Axios POST) - Uses default header (Title: AddStudent) */}
        <Stack.Screen 
          name="AddStudent" 
          component={AddStudent} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
