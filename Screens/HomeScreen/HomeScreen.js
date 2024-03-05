import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, } from 'react-native'

//new code
import auth from '@react-native-firebase/auth';

function HomeScreen({ navigation }) {
    //new code
    const [email, setEmail] = useState('');
    const [passward, setPassward] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const isUserLogin = await auth().signInWithEmailAndPassword(
                email,
                passward
            );
            setMessage("");

            console.log(isUserLogin);
            navigation.navigate('Main')



        } catch (err) {
            console.log(err);
            setMessage(err.message);
        }
    }
    //new code



    return (
        <SafeAreaView>
            <View style={style.view}>
                <Text style={style.text}>Sign In</Text>

                {/* Input */}
                <View style={style.form}>
                    <Text style={style.label}>Email</Text>
                    <TextInput style={style.input}
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />

                    <Text style={style.label}>Password</Text>
                    <TextInput style={style.input}
                        placeholder="Enter Your Passward"
                        value={passward}
                        onChangeText={value => setPassward(value)}
                        secureTextEntry={true}
                    />


                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}><Text style={style.forgotPass}>Forgot Password</Text></TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => navigation.navigate('Main')} style={style.button}><Text style={style.btnText}>Sign In</Text></TouchableOpacity> */}
                    <TouchableOpacity onPress={() => handleLogin()} style={style.button}><Text style={style.btnText}>Sign In</Text></TouchableOpacity>


                    {/* Connect with google */}

                    {/* Sign  Register */}
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={{ ...style.forgotPass, textAlign: 'center', marginTop: 20, }}>Don't Have An Account. Register!</Text></TouchableOpacity>
                    <Text>{message}</Text>
                </View>




            </View>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    view: {
        padding: 10,
    },
    form: {
        margin: 20,
    },
    label: {
        color: '#222',
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,

    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '600',

    },
    forgotPass: {
        color: '#222',
        textAlign: 'right',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    text: {
        color: '#222',
        fontSize: 20,
        marginTop: 20,
        fontWeight: '500',
    },
    input: {
        marginTop: 10,
        backgroundColor: 'rgba(100 , 0, 34 , 0.1)',
        borderRadius: 10,
        padding: 10,
        color: "#222",
    },
    button: {
        marginTop: 10,
        backgroundColor: '#222',
        borderRadius: 10,
        paddingVertical: 15,
        marginTop: 20,
    }
});

export default HomeScreen