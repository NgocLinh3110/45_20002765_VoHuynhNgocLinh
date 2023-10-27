import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './Screen01';
import Screen02 from './Screen02';
import Screen03 from './Screen03';
import Screen04 from './Screen04';

const Stack = createNativeStackNavigator();

const App = () => {
    return ( <
        NavigationContainer >
        <
        Stack.Navigator initialRouteName = 'Screen02'
        screenOptions = {
            { headerShown: false } } >
        <
        Stack.Screen name = 'Screen01'
        component = { Screen01 }
        /> <
        Stack.Screen name = 'Screen02'
        component = { Screen02 }
        options = {
            {
                headerTitle: 'Shops Near Me',
                headerTitleStyle: {
                    margin: 0
                },
                headerRight: () => {
                    return ( <
                        View style = {
                            {
                                marginRight: 12,

                            }
                        } >
                        <
                        Image style = {
                            {
                                width: '24',
                                height: '24'
                            }
                        }
                        source = { require('./pic/Image 177.png') } >
                        < /Image>

                        <
                        /View>
                    )
                }
            }
        }
        />

        <
        /Stack.Navigator>

        <
        /NavigationContainer>
    );
}
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

function Screen02({ navigation }) {
    const navigationScreen = useNavigation();
    const navigationToScreen03 = () => {
        navigationScreen.navigate('Screen03')
    }
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
export default App;