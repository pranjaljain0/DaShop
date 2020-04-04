import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Product = ({route,navigation}) => {

    const { id } = route.params;
    const { product_title } = route.params;
    const { product_description } = route.params;
    const { product_price } = route.params;
    const { product_image } = route.params;

    return (
        <View>
            <Image source = {{ uri: product_image }} style={styles.imageView} />
            <Text>{product_title}</Text>
            <Text>{product_description}</Text>
            <Text>{product_price}</Text>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    imageView: {
        height: 400,
    },
})
