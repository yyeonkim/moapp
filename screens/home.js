import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>Home Screen</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate("About")}
      ></Button>
      <View style={{ height: 10 }}></View>
      <Button
        title="Hello"
        onPress={() => navigation.navigate("Hello")}
      ></Button>
      <View style={{ height: 10 }}></View>
      <Button
        title="구구단"
        onPress={() => navigation.navigate("Count")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    paddingTop: 30,
  },

  textStyle: {
    fontSize: 20,
    marginBottom: 10,
  },
});
