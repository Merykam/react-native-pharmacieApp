import { StatusBar, ImageBackground } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignIn from './src/screen/SigninScreen/SignIn';
import img from './assets/3.jpg'

export default function App() {
  const image = {uri: './assets/2.jpg'};
  return (
    <SafeAreaView style={styles.root}>
      <ImageBackground
        source={img}
        resizeMode="cover" 
        style={styles.backgroundImage}
        >
        {/* <text>hhhh</text> */}
        <SignIn/>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
   
    
  },
});
