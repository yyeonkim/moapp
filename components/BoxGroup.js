import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function BoxGroup({ children }) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    borderColor: "blue",
    borderWidth: 2,
    margin: 5,
    padding: 5,
  },
});
