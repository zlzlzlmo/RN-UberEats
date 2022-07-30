import { StyleSheet, View } from "react-native";
import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantImage from "./RestaurantImage";
import { Colors } from "../../styles/colors";

const RestaurantItem = () => {
  return (
    <View style={styles.container}>
      <RestaurantImage />
      <RestaurantInfo name="Restaurant Name" rating={4} />
    </View>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: Colors.white,
  },
});
