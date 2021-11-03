import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Mult from "./components/Mult";

export default function App() {
  return (
    <View style={styles.body}>
      <Mult />
      <Mult />
      <Mult />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
  },
});
