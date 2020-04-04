import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Banner from './Banner'
import Products from './Products'
import { ScrollView } from 'react-native-gesture-handler'

const Landing = ({navigation}) => {
    return (
        <ScrollView>
            <Banner/>
            <Products navigation={navigation} />
        </ScrollView>
    )
}

export default Landing

const styles = StyleSheet.create({})
