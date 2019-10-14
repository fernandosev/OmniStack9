import React, { useState } from 'react';
import { 
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions,
    TextInput,
    Alert,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

const window = Dimensions.get('window');

import api from './../services/api';

export default function Book({ navigation }){
    const id = navigation.getParam('id');
    const [date, setDate] = useState('');

    async function handleSubmit(){
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${id}/bookings`, {
            date
        }, {
            headers: {
                user_id
            }
        });

        Alert.alert('Solicitação de reserva enviada!');

        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>DATA DE INTERESSE *</Text>
            <TextInput
                style={styles.input}
                placeholder='Qual data você quer reservar?'
                placeholderTextColor='#999'
                autoCapitalize='none'
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity 
                style={styles.button}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
        width: window.width-50,
        paddingRight: 50,
    },

    container: {
        marginHorizontal: 30
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 40
    },

    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    button: {
        height: 42,
        backgroundColor: '#F05A5B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },

    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

Book.navigationOptions = {
    headerRight: (
        <Text style={styles.headerTitle}>Solicitar reserva</Text>
    ),

    headerTitleStyle: { 
        textAlign: 'center', 
        flex: 1
    }
}