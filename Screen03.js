import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Screen03() {

    return ( <
        View style = { styles.container } >
        <
        Text style = {
            {
                fontSize: '23px',
                fontWeight: 'bold'
            }
        } > Welcome to Cafe world < /Text> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});