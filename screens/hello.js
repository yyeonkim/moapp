import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Hello() {
  const [name, setName] = useState("<name>");
  const [greet, setGreet] = useState("Hello, ");

  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>
        {greet}
        {name}
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Your name"
        onChangeText={setName}
      />
      <Button title="Hello" onPress={() => setGreet("Hello, ")}></Button>
      <View style={{ height: 10 }}></View>
      <Button
        title="Nice"
        onPress={() => setGreet("Nice to meet you, ")}
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

  inputStyle: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    fontSize: 20,
  },
});
