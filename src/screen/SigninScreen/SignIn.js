import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import Custominput from '../../components/Custominput';
import { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import axios from 'axios';

export default function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.0.2.2/:5000/api/auth/signin', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.signin}><Text style={styles.text}>Sign in</Text></View>
      <View style={styles.container}>
        <TextInput
          name="email"
          type="text"
          style={styles.input}
          placeholder="Username"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          name="password"
          type="password"
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(text) => setFormData({ ...formData, password: text })}
        />
      </View>
      <CustomButton text="Login" title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 6
  },
  root: {
    padding: 20,
  },
  signin: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 15
  },
  text: {
    color: "#288A81",
    fontSize: 28,
    fontWeight: "bold",
  }
});
