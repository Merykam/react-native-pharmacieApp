import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import Custominput from '../../components/Custominput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';

export default function SignIn() {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');

  const OnLoginPressed = ()=>{
    console.warn("hiiii");
  }

  return (
    <View style={styles.root}>
      <View style={styles.signin}><Text style={styles.text}>Sign in</Text></View>
      
      <Custominput secureTextEntry={false} placeholder="username" value={username} setValue={setUsername}/>
      <Custominput secureTextEntry={true} placeholder="password" value={password} setValue={setPassword}/>
      <CustomButton text="Login" onPress={OnLoginPressed}/>
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
 
   padding:20,


  },
  signin:{
    width:"100%",
    display:"flex",
    alignItems:"center",
    marginBottom:15
   
    
  },
  text :{
    color:"#288A81",
    fontSize:28,
    fontWeight:"bold",
  }

});
