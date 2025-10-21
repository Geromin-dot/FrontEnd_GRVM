import { View, Text, Button, TextInput} from 'react-native';
// Assuming 'styles' points to your style sheet
import styles from '../style'; 
import { useState } from 'react';
import axios from "axios";

export default function Register({ navigation }) {
    const [formData, setFormData] = useState({
        student_id: '',
        full_name: '',
        course: '',
        year_level: '',
    });

    // Helper function to update state based on field name
    const handleChange = (name, text) => {
        setFormData({ ...formData, [name]: text });
    };

    const handleSubmit = async() => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/students/api/register/', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registration Page</Text>
            
            <TextInput
                style={styles.textInput}
                placeholder="Student ID"
                value={formData.student_id}
                onChangeText={(text) => handleChange('student_id', text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Full Name"
                value={formData.full_name}
                onChangeText={(text) => handleChange('full_name', text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Course"
                value={formData.course}
                onChangeText={(text) => handleChange('course', text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Year Level"
                value={formData.year_level}
                onChangeText={(text) => handleChange('year_level', text)}
            />


            <Button style={styles.primaryButton}
                title="Submit"
                onPress={handleSubmit}
            />

        </View>
    );
}