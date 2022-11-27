import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

function ProductCart(props){
    return (
        <View style={styles.product}>
            <View style={styles.title}>
                <Text>{props.product.title}</Text>
            </View>
            <View style={styles.productImage}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: props.product.images[0],
                }}
            />
            </View>
            <Text style={styles.description}>{props.product.description}</Text>
            <TouchableOpacity
          style={styles.buttonFooter}
        >
        </TouchableOpacity>  
          <Text></Text>
        </View>
      );
}

export default ProductCart;

const styles = StyleSheet.create({
    product: {
        backgroundColor: "#F0F8FF",
        display: "flex",
        alignItems: "center",
        marginBottom: 20
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    logo: {
      width: 66,
      height: 58,
    },
    title: {
        fontWeight: "800",
        padding: 10
    },
    description: {
        padding: 10
    },
    price: {
        fontWeight: '800'
    }
  });