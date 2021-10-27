import React from "react";
import { StyleSheet, View } from "react-native";

export default function Circle() {
  return <View style={styles.circle} />;
}

const styles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgb(0, 200, 255)",
    margin: 2,
  },
});
