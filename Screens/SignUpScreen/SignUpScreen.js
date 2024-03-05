// import React, { Children, useState } from "react"
// import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
// import Menu from "../Shared/Menu";
// import Header from "../Shared/Header";

// //new code
// import auth from '@react-native-firebase/auth';

// function SignUpScreen({ navigation }) {
//     //new code
//     const [email, setEmail] = useState('');
//     const [passward, setPassward] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSinUp = async () => {
//         try {
//             const isUserCreated = await auth().createUserWithEmailAndPassword(email, passward);
//             console.log(isUserCreated);



//         } catch (err) {
//             console.log(err);
//             setMessage(err.message);
//         }
//     }
//     //new code

//     return (
//         <SafeAreaView>

//             <Menu />
//             <View style={style.view}>
//                 <Header title="Create An" titleBold="Account" />

//                 {/* Input */}
//                 <View style={style.form}>
//                     <Text style={style.label}>Full Name</Text>
//                     <TextInput style={style.input} />


//                     <Text style={style.label}>Email</Text>
//                     <TextInput style={style.input}
//                         placeholder="Enter Your Email"
//                         value={email}
//                         onChangeText={value => setEmail(value)}
//                     />

//                     <Text style={style.label}>Password</Text>
//                     <TextInput style={style.input}
//                         placeholder="Enter Your Passward"
//                         value={passward}
//                         onChangeText={value => setPassward(value)}
//                         secureTextEntry={true}
//                     />



//                     {/* Check Box  --(Here We Go )-- */}


//                     {/* <TouchableOpacity><Text style={style.forgotPass}>Forgot Password</Text></TouchableOpacity> */}

//                     <TouchableOpacity onPress={() => handleSinUp()} style={style.button}><Text style={style.btnText}>Register</Text></TouchableOpacity>
//                     {/* <TouchableOpacity onPress={() => handleLogin()} style={style.button}><Text style={style.btnText}>Sign Up</Text></TouchableOpacity> */}



//                     {/* Connect with google */}

//                     {/* Sign  Register */}

//                     <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={{ ...style.forgotPass, textAlign: 'center', marginTop: 20, }}>Already Have An Account!</Text></TouchableOpacity>
//                     <Text>{message}</Text>

//                 </View>


//             </View>
//         </SafeAreaView>
//     )

// }

// const style = StyleSheet.create({
//     form: {
//         margin: 10,
//     },
//     view: {
//         padding: 10,
//     },
//     form: {
//         margin: 20,
//     },
//     label: {
//         color: '#222',
//         fontSize: 16,
//         fontWeight: '400',
//         marginTop: 10,

//     },
//     btnText: {
//         color: '#fff',
//         fontSize: 15,
//         textAlign: 'center',
//         fontWeight: '600',

//     },
//     forgotPass: {
//         color: '#222',
//         textAlign: 'right',
//         fontSize: 15,
//         fontWeight: '600',
//         marginTop: 10,
//         textDecorationLine: 'underline',
//     },
//     text: {
//         color: '#222',
//         fontSize: 20,
//         marginTop: 20,
//         fontWeight: '500',
//     },
//     input: {
//         marginTop: 10,
//         backgroundColor: 'rgba(100 , 0, 34 , 0.1)',
//         borderRadius: 10,
//         padding: 10,
//         color: "#222",
//     },
//     button: {
//         marginTop: 10,
//         backgroundColor: '#222',
//         borderRadius: 10,
//         paddingVertical: 15,
//         marginTop: 20,
//     }
// });

// export default SignUpScreen



import React, { Children, useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import Menu from "../Shared/Menu";
import Header from "../Shared/Header";

// //new code
import auth from '@react-native-firebase/auth';

function SignUpScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
            console.log(isUserCreated);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <SafeAreaView>

            <Menu />
            <View style={style.view}>
                <Header title="Create An" titleBold="Account" />

                {/* Input */}
                <View style={style.form}>
                    <Text style={style.label}>Full Name</Text>
                    <TextInput style={style.input}
                        placeholder="Enter Your Full Name"
                        value={name}
                        onChangeText={value => setName(value)} />

                    <Text style={style.label}>Email</Text>
                    <TextInput style={style.input}
                        placeholder="Enter Your Email"
                        value={email}
                        onChangeText={value => setEmail(value)} />

                    <Text style={style.label}>Password</Text>
                    <TextInput style={style.input}
                        placeholder="Enter Your Password"
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true} />


                    {/* Check Box  --(Here We Go )-- */}


                    {/* <TouchableOpacity><Text style={style.forgotPass}>Forgot Password</Text></TouchableOpacity> */}

                    <TouchableOpacity onPress={() => handleRegister()} style={style.button}><Text style={style.btnText}>Register</Text></TouchableOpacity>



                    {/* Connect with google */}

                    {/* Sign  Register */}

                    <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text style={{ ...style.forgotPass, textAlign: 'center', marginTop: 20, }}>Already Have An Account!</Text></TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    form: {
        margin: 10,
    },
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

export default SignUpScreen