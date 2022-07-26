import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";

const Tabs = ["Delivery", "Pickup"];

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(Tabs[0]);

  const handleActiveTab = (text: string) => {
    setActiveTab(text);
  };
  return (
    <View style={styles.container}>
      {Tabs.map((value, index) => (
        <HeaderButton
          text={value}
          isActive={activeTab === value}
          onPress={handleActiveTab}
        />
      ))}
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
