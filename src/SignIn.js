import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: '100', fontSize: 34, marginTop: 50}}>Welcome </Text>
            <Text style={{ marginBottom: 10, fontSize: 18}}>SignIn to continue</Text>
            <View style={styles.form}>
            <TextInput style={styles.input}
            placeholder="Name"
            />
            <TextInput style={styles.input}
            placeholder="Email"
            />
               <TextInput style={styles.input}
            placeholder="Password"
            />
            </View>
            
            <TouchableOpacity style={styles.button}
            onPress={()=> navigation.navigate('Home')}>

                <Text style={{color:'white'}}>SignIn</Text>
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

export default SignIn;