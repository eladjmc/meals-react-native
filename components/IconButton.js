import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const IconButton = ({icon, color, handlePress}) => {
  return (
    <Pressable style={({pressed})=> pressed? styles.pressed : null} onPress={handlePress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity:.7,
    }
})