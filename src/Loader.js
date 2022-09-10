import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => {

    return(
        <View style={[styles.container, styles.horizontal]}>

        <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
});

export default Loader;