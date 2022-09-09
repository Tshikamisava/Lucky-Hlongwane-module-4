import React, { Component, useEffect, useState } from 'react';
import { View, Dimensions, Text, StyleSheet} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import ServiceList from './serviceList';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//create component
const Details = () => {

    const companies = ServiceList
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location);
          console.log(location);
        })();
      }, []);

      const renderMarker =() =>{
        
        return(
            companies.map((marker , index) => {
              
                <Marker
                key={index}
                coordinate={{latitude:maker.latitude, longitude:maker.longitude}}
                title={maker.name}
                />
            })
        )
      }

    return (
      <View style={styles.container}>
        <MapView style={styles.map}
            initialRegion={{
                latitude: -26.110390,
                longitude: 28.053440,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        map: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
  });

  export default Details;

