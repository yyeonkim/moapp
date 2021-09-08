import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";

export default function App() {
  const [buttonTitle, setButtonTitle] = useState("Press Me");
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{ padding: 10 }}
    >
      <View style={styles.title}>
        <Text style={{ fontSize: 25, fontWeight: 600 }}>
          Hello React Native
        </Text>
        <Text style={{ fontSize: 15, color: "blue" }}>
          만나서 반갑습니다 :)
        </Text>
      </View>
      <View style={styles.sentenceContainer}>
        <Text style={styles.sentence}>First sentence</Text>
        <Text style={styles.sentence}>Second sentence</Text>
      </View>
      <Image style={styles.image} source={require("./cat-icon.png")} />
      <Image style={styles.image} source={require("./cat-icon.png")} />
      <Image style={styles.image} source={require("./cat-icon.png")} />
      <Button
        title={buttonTitle}
        onPress={() => {
          setButtonTitle("Ouch!");
        }}
      ></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: { width: 200, height: 200, marginBottom: 10 },
  sentenceContainer: {
    alignSelf: "stretch",
  },
  sentence: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "gray",
    color: "white",
    borderRadius: 10,
    marginBottom: 10,
  },
});
