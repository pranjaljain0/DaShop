import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const Profile = () => {

    // https://randomuser.me/api/
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [userPhoto, setUserPhoto] = useState([]);
    const [email, setEmail] = useState([]);
    const [city, setCity] = useState([]);
    const [country, setCountry] = useState([]);

    // const [products, setproducts] = useState(getMoviesFromApi())
    useEffect(() => {
        // loadDataOnlyOnce();
        fetch('https://randomuser.me/api/')
          .then((response) => response.json())
          .then((json) => {
              setData((json.results)[0])
              setName((((json.results)[0])['name'])['first']+` `+(((json.results)[0])['name'])['last'])
              setUserPhoto((((json.results)[0])['picture'])['large'])
              setEmail(((json.results)[0])['email'])
              setCity((((json.results)[0])['location'])['city'])
              setCountry((((json.results)[0])['location'])['country'])

        })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      },[]);
      var objData=data[0]

    const onPressTester=()=>{
        console.log(name)
    }

    return (
        <View>
            <Image source = {{ uri: userPhoto }} style={styles.userImage} />
            <View style={styles.userContent}>
                <Text style={styles.userName}>Name : {name}</Text>
                <Text style={styles.userEmail}>Email : {email}</Text>
                <Text style={styles.userLocation}>City : {city}</Text>
                <Text style={styles.userLocation}>Country : {country}</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    userImage: {
        height: 400,
    },
    userContent:{
        flex:1,
        marginTop:30,
    },
    userName:{
        marginHorizontal:20,
        fontSize:22,
    },
    userEmail:{
        marginHorizontal:20,
        fontSize:22,
    },
    userLocation:{
        marginHorizontal:20,
        fontSize:22,
    }
})
