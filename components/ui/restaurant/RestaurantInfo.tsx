import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../styles/colors";

interface RestaurantInfoProps {
  name: string;
  rating: number;
}

const RestaurantInfo = ({ name, rating }: RestaurantInfoProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
      </View>
      <View style={styles.raitingContainer}>
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  raitingContainer: {
    backgroundColor: Colors.white,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
