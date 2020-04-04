import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Profile = () => {

    // https://randomuser.me/api/
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // const [products, setproducts] = useState(getMoviesFromApi())
    useEffect(() => {
        fetch('https://randomuser.me/api/')
          .then((response) => response.json())
          .then((json) => setData(json.results))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      });
    
      var name=((data[0])['name'])['first']+` `+((data[0])['name'])['last']

    return (
        <View>
            <Button
                title="Click"
                onPress={()=>onPressHandler()}
            />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
