import { StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screen/SigninScreen/SignIn';
import img from './assets/3.jpg'
import { useState } from 'react';
import { TextInput } from 'react-native';


export default function App() {
  


  const image = {uri: './assets/2.jpg'};
  const [componentChange, setcomponentChange]= useState("");
  const toggle = (value)=>{

    setcomponentChange(value)
  }
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={img}
        resizeMode="cover" 
        style={styles.backgroundImage}
        >
         
        {/* <SignIn/> */}
        <View style={styles.loginContainer}><Text style={styles.login} onPress={()=>{toggle("login")}}>Login</Text></View>
        {componentChange == "login"?<View style={styles.container}><SignIn/></View>  : ""}
        {componentChange == "" ?     <View style={styles.container0}>
        <View style={styles.container1}>
          <View style={styles.container}>

          <TextInput  style={styles.input} placeholder= "search pharmacie" />
          <View style={styles.loginContainer}><Text style={styles.login} >Search</Text></View>

          </View>
        </View>
        </View> : ""}
    
       
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container0:{
    width:"100%",
    alignItems:"center",
    
    display:"flex",
   
  
    
   
  },
  container1:{
    width:"90%",
   
  },
  container: {
    display:"flex",  
    borderColor:"#e8e8e8",
    borderWidth:1,
    borderRadius:5,
    padding:10,
    marginVertical:6 
    
   },
   input:{
    backgroundColor:"white",
    padding:10,
   
   },
  
  root: {
    flex: 1,
    
  },
  container:{
    display:"flex",
   height:"75%",
    justifyContent:"center"
  },
  loginContainer: {
    margin:7,
    padding:7,
    alignItems:"flex-end",
   
    
  },
  
  login:{
    padding:4,
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    backgroundColor:"#288A81",
    textAlign:"center",
    borderRadius:12,
    width:90
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  
  
   
   
    
  },
});
