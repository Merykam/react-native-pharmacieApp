import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import data from '../../data'; 

export default function Pharmacies() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
  
    async function fetchLocation() {
      const { status } = await requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await getCurrentPositionAsync({});
        setUserLocation(location.coords);
        console.log(location);
      }else{
        console.log("you don't have permission");
      }
    }

    fetchLocation();
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; 
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

const filteredPharmacies = userLocation ? data.filter(pharmacy => {
    const distance = calculateDistance(userLocation.latitude, userLocation.longitude, pharmacy.latitude, pharmacy.longitude);
    console.log(`Distance to ${pharmacy.name}: ${distance.toFixed(2)} km`);
    return distance <= 5; 
  }) : [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredPharmacies.map(pharmacy => (
          <View key={pharmacy.id} style={styles.card}>
            <View style={styles.img}>
              <ImageBackground
                source={{ uri: pharmacy.images[0] }}
                resizeMode="cover"
                style={styles.imageBackground}>
              </ImageBackground>
            </View>
            <View style={styles.infoContainer}>
              <Text>{pharmacy.name}</Text>
              <Text>{pharmacy.address}</Text>
              <Text>Distance: {calculateDistance(userLocation.latitude, userLocation.longitude, pharmacy.latitude, pharmacy.longitude).toFixed(2)} km</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  card: {
    width: '90%', 
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20, 
    borderWidth: 1,
    borderColor: 'gray', 
    borderRadius: 10, 
    padding: 10, 
  },
  img: {
    width: '100%',
    height: 200, 
    marginBottom: 10, 
  },
  imageBackground: {
    flex: 1,
    borderRadius: 10, 
  },
  infoContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
