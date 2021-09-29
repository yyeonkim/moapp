import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Nice() {
  return (
    <View style={styles.body}>
      <Text style={styles.textStyle}>This is about the app</Text>
      <Image
        style={styles.catImage}
        source={{
          uri: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    paddingTop: 30,
  },

  textStyle: {
    fontSize: 20,
    marginBottom: 10,
  },

  catImage: {
    height: 200,
  },
});
