import React from 'react';
import { View, Text , SafeAreaView , TouchableOpacity , StyleSheet, TextInput,  } from 'react-native'

const MainScreen1 = ({navigation}) => {
  return (
    <SafeAreaView>
            <View style={style.view}>
                <Text style={style.text}>Translation</Text>

                {/* Input */}
                <View style={style.form}>
                    <Text style={style.input} >Hello, Welcome</Text>


                    <TouchableOpacity onPress={()=>navigation.navigate("Main")} style={ style.button }><Text  style={style.btnText}>New Capture</Text></TouchableOpacity>

                </View>
               
                
            </View>
        </SafeAreaView>
    )

}

const style = StyleSheet.create({
    view: {
        padding: 10,
    },
    form:{
        margin:20,
    },
    label:{
        color:'#222',
        fontSize:16,
        fontWeight:'400',
        marginTop:10,
        
    },
    btnText:{ //new capture text
        color: '#fff',
        fontSize: 15,
        textAlign:'center',
        fontWeight: '600',
        
    },
   
    text: {
        color: '#222',
        fontSize:20,
        marginTop:20,
        fontWeight:'500', 
    },
    input:{
        marginTop:10,
        backgroundColor: 'rgba(100 , 0, 34 , 0.1)',
        borderRadius:10,
        padding:70,
        color:"#222",
    },
    button:{
        marginTop: 10,
        backgroundColor: '#222',
        borderRadius: 10,
        paddingVertical:15,
        marginTop:20,
    }
});


export default MainScreen1;
