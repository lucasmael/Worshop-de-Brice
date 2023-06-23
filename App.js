import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: 'black'}}>
      <Text style={styles.first_layout}>Page D'accueil !</Text>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={{ fontSize: '25px', color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>Profil</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
      <View style={{top: '1%', flexDirection: 'row', justifyContent: "space-between", width: "90%"}}>
        <Text style={{fontSize: '20', fontWeight: 'bold', color: 'white', textTransform: 'uppercase' }}>Profile</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
      <Text style={{width: "100%", fontWeight: 'bold', fontSize: '20px', color: 'white', textTransform: 'uppercase', textAlign: 'right'}}>Retour</Text>
      </TouchableOpacity>
      </View>
        <Text style={{color: 'red', fontSize: '25', fontWeight: 'bold', letterSpacing: '3px'}}>Ferrari</Text>
      <Image source={require('./assets/ferrari.jpg')}></Image>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Bienvenue'}}
        />
        <Stack.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  first_layout: {
    top: '8%',
    position: 'absolute',
    fontSize: '30px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouton: {
    top: '35%',
    backgroundColor: 'red',
    width: "40%",
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  title: {
    fontSize: '20px',
    color:'white',
    fontWeight: 'bold',
    letterSpacing: '3px',
  }
});
