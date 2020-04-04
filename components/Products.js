import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Image, Dimensions, View, Button, ActivityIndicator } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window');

const Products = ({navigation}) => {

    // http://5e86fb0d781e48001676b54a.mockapi.io/dashop/Product
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // const [products, setproducts] = useState(getMoviesFromApi())
    useEffect(() => {
        fetch('http://5e86fb0d781e48001676b54a.mockapi.io/dashop/Product')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      });

    return (
        // <View>
        //     {isLoading?<ActivityIndicator/>:
        //     <Button
        //     title="get data"
        //         onPress={()=>printData()}
        //     ></Button>
        // }
        // </View>
        <View>
        {isLoading?<ActivityIndicator/>:
        <FlatList
                data={data}
                numColumns={2}
                renderItem={({item})=>(
                    <View 
                    style={styles.itemBody}>
                        <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=>navigation.navigate('Product',item)}>
                            <Image source = {{ uri: item.product_image }} style={styles.imageView} />
                            <Text style={styles.itemTitleText}>{item.product_title}</Text>
                            <Text style={styles.itemText}>{item.product_description}</Text>
                        </TouchableOpacity>
                        <View style={styles.productButtons}>                            
                            <Button
                            color="#fab001"
                            title={"Rs. "+item.product_price}/>
                        </View>
                    </View>
                )}
                keyExtractor={(item)=>item.id}
                />
            }
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    itemBody:{
        width:width/2-20,
        borderRadius:11,
        margin:10,
        backgroundColor:'#fff',
        overflow:'hidden',
    },
    itemTitleText:{
        fontWeight:'bold',
        paddingVertical:5,
        paddingLeft:10,
        fontSize:20,
    },
    itemText:{
        paddingLeft:10,
        paddingVertical:5,
    },
    imageView: {
        height: 100,
    },
    productButtons:{
        flex:1,
        justifyContent:'center',
    },
})
