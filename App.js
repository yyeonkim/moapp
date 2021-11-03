import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

import Dice from "./components/Dice";

export default function App() {
  const [num, setNum] = useState(1);

  const getRandom = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Dice</Text>
      <Text style={styles.sum}>{num}</Text>
      <TouchableOpacity
        style={styles.dices}
        onPress={() => {
          setNum(getRandom());
        }}
      >
        <Dice num={num} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },

  sum: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 10,
  },

  dices: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    marginHorizontal: 100,
    marginVertical: 30,
  },
});
