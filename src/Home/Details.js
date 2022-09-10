import React, { Component, useEffect, useState } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import ServiceList from './serviceList';
import Loader from '../Loader';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


//create component
const Details = () => {

    const companies = ServiceList
    let refCarousel= null
    const [currentLocation, setCurrentLocation] = useState(null);
    let mapRef = null

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setCurrentLocation(location);
        
        })();
      }, []);

      const RenderMarker = () => {
   
        return(
          <View>
               {
               companies.map((maker , index) => {
              //console.log(Marker.coord);
              return(
                <Marker
                key={index}
                coordinate={{latitude:maker.coord('latitude'), longitude:maker.coord('longitude')}}
                title={maker.name}
                image={maker.avatar}
                />
              )
        })
      }
          </View>        
        )
      }
      const renderCard = ({item, index}) => {
        return(
          <View styles={{backgroundColor:'white'}}>
          <Text>
            {item.name}
          </Text>
          <Text>
            {item.email}
          </Text>
          <Text>
            {item.review}
          </Text>
          <TouchableOpacity>
            <Text>visit us</Text>
          </TouchableOpacity>

          </View>
        )
      }
      const onCarouselChange = (index) => {
        let location = companies[index].coord
        mapRef.animateToRegion({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.03,
          longitudeDelta: 0.04,
        })
      }

    return (
      <View style={styles.container}>
        {companies != null
        ?<View>
        <MapView style={styles.map}
        ref={(c) => mapRef = c}
          initialRegion={{
            latitude: -26.110390,
            longitude: 28.053440,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        
        
            showsUserLocation={true}
        >
        <RenderMarker/>
        </MapView>
        <View>
       <Carousel
          ref={(c) => { refCarousel = c; }}
          data={companies.entries}
          renderItem={renderCard}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={100}
          containerCustomStyle={styles.Carousel}
          onSnapToItem={(index) => onCarouselChange(index)}
     />
     </View>
     </View>
        :<Loader/>
      }
      </View>
    );
  };

  const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            ...StyleSheet,
        },
        map: {
            ...StyleSheet.absoluteFillObject,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
  });

  export default Details;

