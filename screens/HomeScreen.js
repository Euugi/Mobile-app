import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

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
        <Text style={styles.helloText}>Hello {auth.currentUser?.email}!</Text>
        <TouchableOpacity
          onPress={handleGoToShop}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go to shop</Text>
        </TouchableOpacity>     
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

export default HomeScreen

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