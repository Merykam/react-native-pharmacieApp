import { StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screen/SigninScreen/SignIn';
import img from './assets/3.jpg'
import { useState } from 'react';
import { TextInput } from 'react-native';
import Pharmacies from './src/components/pharmacies';


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
         
        <View style={styles.loginContainer}><Text style={styles.login} onPress={()=>{toggle("login")}}>Login</Text></View>
        {componentChange == "login"?<View style={styles.container}><SignIn/></View>  : ""}
        {componentChange == "" ? 
        <View style={styles.pharmacie}>
          <Text style={styles.pharmacieText}>Pharm<Text style={styles.gard}>Gard</Text></Text>
          <Text style={styles.welcomeMsg}>Find pharmacies near you more easily with pharmGard.</Text>
          
        <View><Text style={styles.started}  onPress={()=>{toggle("pharmacies")}}>Get started</Text></View>
          </View>:""}
          
       
       {componentChange == "pharmacies"? <Pharmacies></Pharmacies>:""}
       
    
       
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  started:{
    padding:17,
    color:"white",
    fontSize:24,
    backgroundColor:"#0b4e48",
    borderRadius:12,
  

  },
  welcomeMsg: {
    marginVertical:15,
    fontSize:18,
    textAlign:"center"
  },
  pharmacie:{
    width:"100%",
    alignItems:"center",
    marginVertical:200

  },
  pharmacieText:{
    fontSize:50,
    fontWeight:"bold",
   

  },
  gard:{
    color: "#158379",
  },
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
    padding:6,
    color:"white",
    fontSize:24,
    fontWeight:"bold",
    backgroundColor:"#0b4e48",
    textAlign:"center",
    borderRadius:12,
    width:90
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  
    
  },
});
