import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Colors } from "../../styles/colors";
import { CATEGORY_ITEMS } from "../../data/constants/categories";

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
      {CATEGORY_ITEMS.map((item, index) => (
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
