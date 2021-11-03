import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import BoxGroup from "./components/BoxGroup";

export default function App() {
  return (
    <View style={styles.body}>
      <BoxGroup>
        <Text style={styles.text}>ABCD</Text>
        <Text style={styles.text}>123</Text>
        <Button title="OK" />
      </BoxGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },

  text: {
    backgroundColor: "wheat",
    fontSize: 30,
    margin: 2,
    padding: 2,
  },
});
