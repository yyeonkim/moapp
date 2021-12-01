import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function App() {
  return <View style={styles.body}></View>;
}

const styles = StyleSheet.create({
  body: {
    marginTop: 40,
    padding: 20,
  },

  weather: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  text: {
    marginRight: 20,
  },

  icon: {
    backgroundColor: "wheat",
    width: 40,
    height: 40,
    marginRight: 20,
  },
});
