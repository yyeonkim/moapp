import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.body}>
      <Text style={styles.textBox}>{count}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Count Up"
          onPress={() => {
            setCount((current) => current + 1);
          }}
        ></Button>
        <View style={{ height: 10 }}></View>
        <Button
          title="Count Down"
          onPress={() => {
            setCount((current) => current - 1);
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    paddingTop: 30,
  },

  textBox: {
    backgroundColor: "#b2bec3",
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
  },
});
