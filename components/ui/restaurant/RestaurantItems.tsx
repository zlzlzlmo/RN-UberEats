import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LOCAL_RESTAURANTS } from "../../data/constants/restaurants";
import RestaurantItem from "./RestaurantItem";

const RestaurantItems = () => {
  return (
    <>
      {LOCAL_RESTAURANTS.map((restaurant, index) => (
        <RestaurantItem />
      ))}
    </>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});
