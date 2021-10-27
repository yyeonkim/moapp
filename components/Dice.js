import React from "react";
import { StyleSheet, View } from "react-native";

import { Blank } from "./Blank";
import Circle from "./Circle";

export default function Dice({ num }) {
  if (num == 1) {
    return (
      <View style={styles.dice}>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
      </View>
    );
  }

  if (num == 2) {
    return (
      <View style={styles.dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }

  if (num == 3) {
    return (
      <View style={styles.dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }

  if (num == 4) {
    return (
      <View style={styles.dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Blank />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }

  if (num == 5) {
    return (
      <View style={styles.dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Blank />
          <Circle />
        </View>
      </View>
    );
  }

  if (num == 6) {
    return (
      <View style={styles.dice}>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Circle />
          <Circle />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Blank />
          <Circle />
          <Blank />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Circle />
          <Circle />
          <Circle />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dice: {
    backgroundColor: "rgb(255, 240, 200)",
    padding: 10,
  },
});
