import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';

export default function CustomButton({onPress,text}) {
 

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:"#288A81",
    width:"100%",
    padding:10,
    color:"white",
    display:"flex",
    alignItems:"center",
    borderRadius:7
  },
  text: {
    color:"white",
    fontWeight:"bold"
  }

});
