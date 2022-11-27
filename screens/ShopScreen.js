import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Product from '../components/Product';
import { auth, db } from '../firebase'

const ShopScreen = () => {
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

  const navigation = useNavigation()
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.product}>
              {isLoading ? <ActivityIndicator/> : (
                <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                    <Product product={item}></Product>
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
    </ScrollView>
  )
}

export default ShopScreen

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flexGrow: 2,
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
  product: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "white",
    width: "70%"
  }
})