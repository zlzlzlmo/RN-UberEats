import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantImage from "./RestaurantImage";
import { Colors } from "../../styles/colors";

interface RestaurantItemProps {
  name: string;
  image_url: string;
  categories: string[];
  price: string;
  reviews: number;
  rating: number;
}

const RestaurantItem = ({
  name,
  image_url,
  categories,
  price,
  reviews,
  rating,
}: RestaurantItemProps) => {
  return (
    <Pressable style={{ marginBottom: 30 }}>
      <View style={styles.container}>
        <RestaurantImage image_url={image_url} />
        <RestaurantInfo name={name} rating={rating} />
      </View>
    </Pressable>
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
