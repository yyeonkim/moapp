import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Dice from "./components/Dice";

export default function App() {
  const [num, setNum] = useState(1);

  return (
    <View style={styles.body}>
      <Dice num={num} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 40,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
