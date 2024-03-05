import React, { Children } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Menu from "../Shared/Menu";
import Header from "../Shared/Header";
function VerificationScreen({ navigation }) {
    return (
        <SafeAreaView>
            <Menu />
            <View style={style.view}>
                <Header title="Verification" titleBold="Code" />
                {/* Input */}
                <View style={style.form}>
                    <Text style={style.label}>Enter Password</Text>
                    <TextInput style={style.input} />
                    <Text style={style.label}>Confirm Password</Text>
                    <TextInput style={style.input} />
                    {/* Check Box  --(Here We Go )-- */}
                    {/* <TouchableOpacity><Text style={style.forgotPass}>Forgot Password</Text></TouchableOpacity> */}
                    <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={style.button}><Text style={style.btnText}>Reset Password</Text></TouchableOpacity>
                    <Text>Resend Code in 3:23</Text>
                    {/* Connect with google */}
                    {/* Sign  Register */}
                    {/* <TouchableOpacity><Text style={{ ...style.forgotPass, textAlign: 'center', marginTop: 20, }}>Already Have An Account!</Text></TouchableOpacity> */}
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

export default VerificationScreen