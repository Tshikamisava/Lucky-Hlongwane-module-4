import React from 'react';
import { View, Image,  Dimensions,  Text, cardHeight, cardWidth,  StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import serviceData from './Data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {
    return(
        <SafeAreaView>
            <FlatList 
            data={serviceData}
            contentInset={{padding: 12}}
            renderItem={({item}) =>{
                return(
                    <TouchableOpacity  onPress={()=> navigation.navigate('Detail')}
                    style={{margin:10, height:windowHeight * 0.2, backgroundColor:item.bgColor, borderRadius:10}} >
                        
                       
                     <View style={[StyleSheet.absoluteFillobject,{padding:10}]}>
                       
                     <Image style={{
                            height: 80, width: 70, position:'absolute', right:2, margin:1, bottom:0
                        }} source={item.image}/>

                        <Text style={styles.category}>
                            {item.category}
                        </Text>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text>
                            {item.numberCompany}
                        </Text>
                        
                        
                        </View>
                        
                        
                    </TouchableOpacity>
                )
            }}
            >

            </FlatList>
        </SafeAreaView>
    );
    
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       
      
      backgroundColor: '#eee',
    },
    category:{
        fontSize:24,
        fontWeight:'200',
        color: 'white'
    },
    name:{
      fontSize:16, 
      fontWeight:'500', 
    }
});

export default Home;