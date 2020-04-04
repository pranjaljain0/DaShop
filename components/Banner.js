import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Banner = () => {
    return (
        <ImageBackground 
        style={styles.bannerView}
        source={{uri:'https://i.picsum.photos/id/490/300/100.jpg'}}>
            <Text style={styles.bannerText}>Banner</Text>
            <Text style={styles.bannerTextLong}>Lorem Ipsum doler</Text>
        </ImageBackground>
    )
}

export default Banner

const styles = StyleSheet.create({
    bannerView:{
        flex:1,
        height:300,
    },
    bannerText:{
        color:'#fff',
        fontSize:30,
        textAlign:'center',
        paddingTop:120,
    },
    bannerTextLong:{
        color:'#fff',
        fontSize:20,
        marginTop:10,
        textAlign:'center',
    },
})
