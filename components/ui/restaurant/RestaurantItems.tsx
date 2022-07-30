import { StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { LOCAL_RESTAURANTS } from "../../data/constants/restaurants";
import RestaurantItem from "./RestaurantItem";

const RestaurantItems = () => {
  return (
    <>
      {LOCAL_RESTAURANTS.map((restaurant, index) => (
        <Fragment key={index}>
          <RestaurantItem {...restaurant} />
        </Fragment>
      ))}
    </>
  );
};

export default RestaurantItems;

const styles = StyleSheet.create({});
