import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import BoxGroup from "./components/BoxGroup";
import Mult from "./components/Mult";

export default function App() {
  return (
    <View style={{ paddingTop: 30 }}>
      <BoxGroup>
        <Mult />
      </BoxGroup>
      <BoxGroup>
        <Mult />
        <Mult />
      </BoxGroup>
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
    backgroundColor: "wheat",
    fontSize: 30,
    margin: 2,
    padding: 2,
  },
});
