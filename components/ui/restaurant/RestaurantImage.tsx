import { StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LOCAL_RESTAURANTS } from "../../data/constants/restaurants";
import { Colors } from "../../styles/colors";

interface RestaurantImageProps {
  image_url: string;
}

const RestaurantImage = ({ image_url }: RestaurantImageProps) => {
  return (
    <>
      <Image
        source={{ uri: image_url }}
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
};

export default RestaurantImage;

const styles = StyleSheet.create({});
