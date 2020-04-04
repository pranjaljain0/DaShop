import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Main = ({loginHandler}) => {
    return (
        <View style={styles.container}>
            <Text>Main JS</Text>
            <TouchableOpacity
                onPress={()=>loginHandler(123)}>
                <Text>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        textAlign:"center",
    },
})
