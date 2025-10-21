import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import styles from '../style'; 

const API_URL = 'http://127.0.0.1:8000/students/api/studentslist/'; 

export default function StudentList() {

    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => {
                setStudents(res.data);
                setLoading(false);
                setError(null);
            })
            .catch((error) => {
                console.error('Error fetching students:', error);
                setLoading(false);
                setError('Failed to load data. Check server connection.');
            });
    }, []);
    
    // Using a style utility for centering, falling back to inline styles if 'center' is missing
    const centerStyle = styles.center || { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC' };

    if (loading) {
        return (
            <View style={centerStyle}>
                <ActivityIndicator size="large" color="#00B8D4" />
                <Text>Loading student data...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Students List</Text>
            <FlatList 
                data={students}
                keyExtractor={(item) => item.id ? item.id.toString() : item.student_id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.full_name}>Name: {item.full_name}</Text>
                        <Text style={styles.userInfo}>ID: {item.student_id}</Text>
                        <Text style={styles.userInfo}>Course: {item.course}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
