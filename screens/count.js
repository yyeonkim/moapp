import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Count() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <View style={styles.body}>
      <View style={styles.textContainer}>
        <Text style={styles.numberBox}>{countA}</Text>
        <Text style={styles.operationBox}>X</Text>
        <Text style={styles.numberBox}>{countB}</Text>
        <Text style={styles.operationBox}>=</Text>
        <Text style={styles.numberBox}>{countA * countB}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title=" + "
          onPress={() => setCountA((current) => current + 1)}
        ></Button>
        <View style={{ width: 10 }}></View>
        <Button
          title=" + "
          onPress={() => setCountB((current) => current + 1)}
        ></Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title=" - "
          onPress={() => setCountA((current) => current - 1)}
        ></Button>
        <View style={{ width: 10 }}></View>
        <Button
          title=" - "
          onPress={() => setCountB((current) => current - 1)}
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
    marginBottom: 10,
    flexDirection: "row",
  },

  numberBox: {
    backgroundColor: "#dfe6e9",
    padding: 10,
  },

  operationBox: {
    padding: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
