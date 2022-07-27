import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../styles/colors";

interface HeaderButtonProps {
  text: string;
  isActive: boolean;
  onPress: (text: string) => void;
}

const HeaderButton = ({ text, isActive, onPress }: HeaderButtonProps) => (
  <View
    style={[
      styles.container,
      { backgroundColor: isActive ? Colors.black : Colors.white },
    ]}
  >
    <TouchableOpacity onPress={onPress.bind(this, text)}>
      <Text
        style={{
          color: isActive ? Colors.white : Colors.black,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
});
