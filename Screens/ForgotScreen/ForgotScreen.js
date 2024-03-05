import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native';
//new code
import auth from '@react-native-firebase/auth'; // Import Firebase authentication instance

function ForgotScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        if (email) {
            auth().sendPasswordResetEmail(email)
                .then(() => {
                    Alert.alert('Password Reset Email Sent', 'Please check your email inbox to reset your password.');

                })
                .catch(error => {
                    Alert.alert('Error', error.message);
                });
        } else {
            Alert.alert('Error', 'Please enter your email address.');
        }
    };

    return (
        <SafeAreaView>
            <View style={style.view}>
                {/* Your other components */}
                <View style={style.form}>
                    <Text style={style.label}>Enter Email</Text>
                    <TextInput
                        style={style.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={handleForgotPassword} style={style.button}>
                        <Text style={style.btnText}>Forgot Password</Text>
                    </TouchableOpacity>
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

export default ForgotScreen;