import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { auth } from '../firebase'
import ProductCart from '../components/ProductCart'

const CartScreen = () => {
  const navigation = useNavigation()
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }


  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState('')

  const getProducts = async () => {
    try {
     const response = await fetch('https://dummyjson.com/products');
     const json = await response.json();
     setData(json.products);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 useEffect(() => {
  getProducts();
  }, []);

  const handleGoToShop = () => {
      navigation.replace("Shop")
  }

  const handleGoToCart = () => {
    navigation.replace("Cart")
  }

  const handleGoToAccount = () => {
    navigation.replace("Home")
  }

  const handleGoToHome = () => {
    navigation.replace("Home")
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
      <View style={styles.product}>
              {isLoading ? <ActivityIndicator/> : (
                <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <ProductCart product={item}></ProductCart>
                  )}
                />
              )}
          </View>
      </View>
      <View style={styles.footer}>
      <TouchableOpacity
          onPress={handleGoToHome}
          style={styles.buttonFooter}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          onPress={handleGoToCart}
          style={styles.buttonFooter}
        >
          <Text style={styles.buttonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleGoToAccount}
          style={styles.buttonFooter}
        >
          <Text style={styles.buttonText}>Account</Text>
        </TouchableOpacity>         
        <TouchableOpacity
          onPress={handleSignOut}
          style={styles.buttonFooter}
        >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>  
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: "center"
  },
   button: {
    backgroundColor: '#0782F9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonFooter: {
    width: "25%",
    backgroundColor: '#0782F9',
    padding: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
  helloText: {
    padding:20,
    fontSize: 20,
    fontWeight: '800'
  }
})