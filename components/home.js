import React, { useState } from 'react'
import { StyleSheet, View, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from './Products'
import Landing from './Landing'
import Profile from './Profile'

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home': 'ios-home';
              } else if (route.name === 'Products') {
                iconName = focused ? 'ios-cart' : 'ios-cart';
              }else if (route.name === 'Profile') {
                iconName = focused ? 'md-person' : 'md-person';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fab001',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Landing} />
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1d1d1d',
    },
})
