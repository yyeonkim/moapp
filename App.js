import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [greet, setGreet] = useState("Hello, ");
  const [name, setName] = useState("<Name>");

  return (
    <View style={styles.body}>
      <Text style={styles.textBox}>
        {greet}
        {name}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="이름을 입력하세요"
        onChangeText={setName}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Nice"
          onPress={() => {
            setGreet("Nice to meet you, ");
          }}
        ></Button>
        <View style={{ width: 10 }}></View>
        <Button
          title="Hello"
          onPress={() => {
            setGreet("Hello, ");
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

  textInput: {
    padding: 10,
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#2d3436",
  },

  buttonContainer: {
    flexDirection: "row-reverse",
  },
});
