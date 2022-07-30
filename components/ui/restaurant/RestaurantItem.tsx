import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LOCAL_RESTAURANTS } from "../../data/constants/restaurants";

const RestaurantItem = () => {
  return (
    <View>
      <Text>RestaurantItem</Text>
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({});

const RestaurantImage = () => (
  <Image source={{ uri: LOCAL_RESTAURANTS[0].image_url }} />
);
