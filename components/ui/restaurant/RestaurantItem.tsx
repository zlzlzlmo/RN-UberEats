import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LOCAL_RESTAURANTS } from "../../data/constants/restaurants";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "../../styles/colors";

const RestaurantItem = () => {
  return (
    <View>
      <RestaurantImage />
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({});

const RestaurantImage = () => (
  <>
    <Image
      source={{ uri: LOCAL_RESTAURANTS[0].image_url }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color={Colors.white}
      />
    </TouchableOpacity>
  </>
);
