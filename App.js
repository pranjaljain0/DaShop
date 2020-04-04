import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './components/home'
import Main from './components/main'
import Login from './components/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './components/Product'

const Stack = createStackNavigator();

const App = () => {

  const [auth, setauth] = useState(false)

  const loginHandler=(authkey)=>{
    if(authkey==123){
      setauth(true)
    }
    else{
      setauth(false)
    }
  }

  if(auth==true){
  return (
    <NavigationContainer>
        <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#fab001',
                },
                headerTintColor: '#fff',
              }}
        >
          <Stack.Screen name="Home" component={Home} options={{
            title:'DaSHOP',
            }} />
          <Stack.Screen name="Main" component={Main} options={{}} />
          <Stack.Screen name="Product" component={Product} options={({route})=>({
            title:route.params.title,
            })}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
  }
  else{
    return(
      <Login
      loginHandler={loginHandler}
    />
    )
  }
}

export default App

const styles = StyleSheet.create({})
