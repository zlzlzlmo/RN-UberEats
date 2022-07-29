import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../styles/colors";

const items = [
  {
    image: require("../../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../../assets/images/deals.png"),
    text: "Deals",
  },
];

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: Colors.white,
        marginTop: 5,
        paddingVertical: 15,
        paddingLeft: 20,
      }}
    >
      {items.map((item, index) => (
        <View style={styles.category} key={index}>
          <Image
            source={item.image}
            style={{ width: 50, height: 40, resizeMode: "contain" }}
          />
          <Text style={styles.categoryText}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  category: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  categoryText: {
    fontWeight: "900",
    fontSize: 13,
  },
});
