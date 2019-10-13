import React from 'react';
import { 
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default function Book({ navigation }){
    const id = navigation.getParam('id');

    return (
        <SafeAreaView>
            <Text>{id}</Text>
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