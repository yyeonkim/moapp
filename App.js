import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

let L = [];

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    L.push(
      <Text>
        {i} x {j} = {i * j}
      </Text>
    );
  }
}

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.body}
    >
      {L}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 30,
  },

  contentContainer: {
    margin: 20,
    marginTop: 0,
  },
});
