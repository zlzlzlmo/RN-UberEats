import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTabs from "../layout/HeaderTabs";
import { Colors } from "../styles/colors";
import SearchBar from "../features/search/SearchBar";
import Categories from "../features/category/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: Colors.white, padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
});
