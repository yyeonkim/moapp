import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Mult() {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

  return (
    <View style={{ alignItems: "center", flexDirection: "row" }}>
      <TextInput style={styles.input} placeholder="A" onChangeText={setA} />
      <Text style={styles.text}> X </Text>
      <TextInput style={styles.input} placeholder="B" onChangeText={setB} />
      <Text style={styles.text}> = {A * B}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 10,
    margin: 10,
  },

  input: {
    fontSize: 30,
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
});
