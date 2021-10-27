import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Dice from "../components/Dice";

export default function App() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);

  const getRandom = () => {
    return Math.floor(Math.random() * 6 + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Double Dice</Text>
      <Text style={styles.sum}>{num1 + num2}</Text>
      <View style={styles.dices}>
        <Dice num={num1} />
        <Dice num={num2} />
      </View>
      <View style={styles.button}>
        <Button
          title="Roll the dice"
          onPress={() => {
            setNum1(getRandom());
            setNum2(getRandom());
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 200,
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
    justifyContent: "space-evenly",
  },

  button: {
    marginHorizontal: 100,
    marginVertical: 30,
  },
});
