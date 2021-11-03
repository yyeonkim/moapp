import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHightlight,
} from "react-native";

export default function App() {
  const [N, setN] = useState(0);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Touched {N} times</Text>

      <TouchableHightlight
        underlayColor="orange"
        onPress={() => setN((current) => current + 1)}
      >
        <View style={[styles.text, styles.button]}>
          <Text>High, Touch Me</Text>
        </View>
      </TouchableHightlight>

      <TouchableNativeFeedback onPress={() => setN((current) => current - 1)}>
        <View>
          <Text style={[styles.button, styles.text]}>High, Touch Me</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },

  text: {
    fontSize: 30,
    padding: 10,
    margin: 10,
  },

  button: {
    color: "dodgerblue",
  },
});
