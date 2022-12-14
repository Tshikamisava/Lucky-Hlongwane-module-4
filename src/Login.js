import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: '100', fontSize: 34, marginTop: 50}}>Welcome to TShikamisava Group of Campanies</Text>
            <Text style={{ marginBottom: 10, fontSize: 18}}>Login to continue</Text>
            <View style={styles.form}>
            <TextInput style={styles.input}
            placeholder="Email"
            />
            <TextInput style={styles.input}
            placeholder="Password"
            />

<TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('SignIn')}>

                <Text style={{color:'white'}}>SignUP</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('Home')}>

                <Text style={{color:'white'}}>Login</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
    input:{
        height: 40,
        margin: 12,
        //borderWidth: 1,
        borderBottomWidth:1,
        padding: 10,
    },
    button:{
        alignItems: "center",
        backgroundColor: "#6200ea",
        padding: 10,
        margin:10,
        borderRadius: 10,
        
    },
    form:{
        margin:16,
        paddingTop:windowHeight/4
    }

});

export default Login;