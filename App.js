import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Dice from "./components/Dice";

export default function App() {
  const [num, setNum] = useState(1);

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Text style={styles.text}>Dice</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Dice num={num} />
      </View>
      <View style={styles.button}>
        <Button
          title="Roll the dice"
          onPress={() => setNum(Math.floor(Math.random() * 6 + 1))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 5,
  },

  button: {
    marginHorizontal: 100,
    marginVertical: 30,
  },
});
