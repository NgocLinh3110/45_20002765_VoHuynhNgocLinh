import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';

export default function Screen02({ navigation }) {
    const navigationScreen = useNavigation();
    const navigationToScreen03 = () => {
        navigationScreen.navigate('Screen03')
    }
    const data = [{
            name: 'Kitanda Espresso & Acai-U District',
            type: 'Accepting Orders',
            waitTime: '5-10 minutes',
            address: '1121 NE 45 St',
            img: require('./pic/Image (6).png'),
            typePic: require('./pic/tick.png'),
            timePic: require('./pic/Image 191.png'),
            addressPic: require('./pic/location.png')
        },
        {
            name: 'Kitanda Espresso & Acai-U District',
            type: 'Tempory Unavailable',
            waitTime: '10-15 minutes',
            address: '1121 NE 45 St',
            img: require('./pic/Image (6).png'),
            typePic: require('./pic/material-symbols_lock.png'),
            timePic: require('./pic/Image 191.png'),
            addressPic: require('./pic/location.png')
        },
        {
            name: 'Kitanda Espresso & Acai-U District',
            type: 'Accepting Orders',
            waitTime: '5-10 minutes',
            address: '1121 NE 45 St',
            img: require('./pic/Image (6).png'),
            typePic: require('./pic/tick.png'),
            timePic: require('./pic/Image 191.png'),
            addressPic: require('./pic/location.png')
        },
        {
            name: 'Kitanda Espresso & Acai-U District',
            type: 'Accepting Orders',
            waitTime: '5-10 minutes',
            address: '1121 NE 45 St',
            img: require('./pic/Image (6).png'),
            typePic: require('./pic/tick.png'),
            timePic: require('./pic/Image 191.png'),
            addressPic: require('./pic/location.png')
        },
    ];
    return ( <
        View style = { styles.container } >
        <
        FlatList data = { data }
        renderItem = {
            ({ item }) => ( <
                Pressable style = {
                    {
                        width: '90%',
                        height: '80px'
                    }
                }
                onPress = {
                    () => navigationToScreen03(item) } >
                <
                Image style = {
                    {
                        width: '90%',
                        height: '50px',
                        borderRadius: '10px'
                    }
                }
                source = { require('./pic/Image (6).png') } >
                < /Image> <
                View style = {
                    {
                        flexDirection: 'row',
                        width: '100%',
                        height: '20px',
                        gap: '5px'
                    }
                } >
                <
                Image style = {
                    {
                        height: '20px',
                        width: '20px',
                    }
                }
                source = { item.typePic } > < /Image> <
                Text style = {
                    {
                        color: 'green 80%',
                        fontSize: '15px',
                        gap: '10px'
                    }
                } > { item.type } < /Text>

                <
                Image style = {
                    {
                        height: '20px',
                        width: '20px',
                    }
                }
                source = { item.timePic } > < /Image> <
                Text style = {
                    {
                        color: 'green 80%',
                        fontSize: '15px',
                        gap: '10px'
                    }
                } > { item.waitTime } < /Text>


                <
                Image style = {
                    {
                        height: '20px',
                        width: '20px',
                    }
                }
                source = { item.addressPic } > < /Image> <
                /View> <
                Text style = {
                    {
                        fontWeight: 'bold',
                        fontSize: '20px'
                    }
                }
                numberOfLines = { 1 } >
                { item.name } < /Text> <
                Text style = {
                    {
                        fontSize: '15px',
                        color: 'grey 70%'
                    }
                } > { item.address } < /Text> <
                /Pressable>
            )
        } >

        <
        /FlatList> <
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