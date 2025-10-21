import React from "react";
import { View, Text, Button } from 'react-native';
import styles from "../style";

export default function Homepage({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Student Management</Text>
            
            <View style={styles.containerButton} >
                <View style={styles.buttonSpacing}>
                    <Button style={styles.primaryButton}
                        title="Check Student List" 
                        onPress={() => navigation.navigate('StudentList')}
                    />
                </View>
                
                <Button style={styles.primaryButton}
                    title="Add New Student"
                    onPress={() => navigation.navigate('AddStudent')}
                />
            </View>
        </View>
    );
}