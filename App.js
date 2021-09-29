import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.textContainer}>
        <Text style={styles.textBox}>{countA}</Text>
        <Text style={styles.operation}>X</Text>
        <Text style={styles.textBox}>{countB}</Text>
        <Text style={styles.operation}>=</Text>
        <Text style={styles.textBox}>{countA * countB}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.styledButton}
          title="+"
          onPress={() => {
            setCountA((current) => current + 1);
          }}
        ></Button>
        <View style={{ width: 10 }}></View>
        <Button
          style={styles.styledButton}
          title="+"
          onPress={() => {
            setCountB((current) => current + 1);
          }}
        ></Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.styledButton}
          title="-"
          onPress={() => {
            setCountA((current) => current - 1);
          }}
        ></Button>
        <View style={{ width: 10 }}></View>
        <Button
          style={styles.styledButton}
          title="-"
          onPress={() => {
            setCountB((current) => current - 1);
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

  textContainer: {
    flexDirection: "row",
  },

  textBox: {
    backgroundColor: "#b2bec3",
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
  },

  operation: {
    fontSize: 20,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },

  styledButton: {
    width: 20,
  },
});
