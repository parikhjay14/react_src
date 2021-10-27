import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList,} from 'react-native';
import ListCard from './resuableComponents/ListCard';

class ListViewScreen extends Component{
    render(){
        const {ViewStyle, HeaderViewStyle} = styles;
        const DATA = [
            {
                image: require('./meme1.jpg'),
                owner: 'Meme1',
            },
            {
                image: require('./meme2.jpg'),
                owner: 'Meme2',
            },
            {
                image: require('./meme3.jpg'),
                owner: 'Meme3',
            },
            {
                image: require('./meme4.jpg'),
                owner: 'Meme4',
            },
           
        ];
        return (
            <View style ={ViewStyle}>
                <View style = {HeaderViewStyle}>
                   <Text style={{fontSize: 20, fontWeight: 'bold'}}>Meme Gallery</Text>
                </View>
                {/* <ScrollView>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                  <ListCard image={require('./meme1.jpg')} ownerName="Jay Parikh"/>
                </ScrollView> */}
                <FlatList
                 data={DATA}
                 renderItem={item => {
                     console.log(item, item.item, item.item.owner);
                     return(
                         <ListCard image={item.item.image} ownerName={item.item.owner}/>
                     );
                 }}
                 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ViewStyle:{
        backgroundColor: 'white',
        flex: 1,
    },
    HeaderViewStyle: {
        backgroundColor: '#d3d3d3',
        height: 80,
        elevation: 10,
        //next 4 for elevation in IOS
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontColor: 'red',
    },
});

export default ListViewScreen;