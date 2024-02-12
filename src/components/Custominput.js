import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , TextInput} from 'react-native';

export default function Custominput({value, setValue, placeholder, secureTextEntry}) {



  return (
    <View style={styles.container} >

      <TextInput secureTextEntry={secureTextEntry} type="password" value={value} onChange={setValue} style={styles.input} placeholder= {placeholder} />
    
    </View>
  );


}
const styles = StyleSheet.create({
   container: {
   backgroundColor:"white",
   width:"100%",
   borderColor:"#e8e8e8",
   borderWidth:1,
   borderRadius:5,
   padding:10,
   marginVertical:6 
   



  },
  input:{
   
  },
})



