import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantImage from "./RestaurantImage";

const RestaurantItem = () => {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo name="Restaurant Name" rating={4} />
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({});
