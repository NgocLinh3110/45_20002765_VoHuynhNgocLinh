import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';

export default function Screen01({ navigation }) {
    const navigationScreen = useNavigation();
    const navigationToScreen02 = () => {
        navigationScreen.navigate('Screen02')
    }
    return ( <
        View style = { styles.container } >
        <
        View style = { styles.style1 } >
        <
        Text style = {
            {
                fontSize: '23px',
                fontWeight: 'bold'
            }
        } > Welcome to Cafe world < /Text> <
        /View> <
        View style = { styles.style2 } >
        <
        Image style = {
            {
                height: '80px',
                width: '200px',
                borderRadius: '10px',
                marginBottom: '30px'
            }
        }
        source = { require('./pic/Image (5).png') } >
        < /Image> <
        Image style = {
            {
                height: '80px',
                width: '200px',
                borderRadius: '10px',
                marginBottom: '30px'
            }
        }
        source = { require('./pic/Image (5).png') } >
        < /Image> <
        Image style = {
            {
                height: '80px',
                width: '200px',
                borderRadius: '10px'
            }
        }
        source = { require('./pic/Image (5).png') } >
        < /Image> <
        /View> <
        View style = { styles.style3 } >
        <
        Pressable style = {
            {
                width: '200px',
                height: '50px',
                backgroundColor: 'blue',
                borderRadius: '10px',
            }
        }

        onPress = { navigationToScreen02 } >
        <
        Text style = {
            {
                color: 'white',
                marginLeft: '50px',
                marginTop: '12px'
            }
        } > GET STARTED < /Text> <
        /Pressable> <
        /View> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style1: {
        flex: 1,
        backgroundColor: 'grey 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style2: {

        flex: 2,
        backgroundColor: 'grey 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    style3: {

        flex: 1,
        backgroundColor: 'grey 50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});