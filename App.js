import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

let names = ["Ewha", "June", "Jane", "Nick"];
let phones = [1234, 3245, 2355, 6578];

export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [refresh, setRefresh] = useState(0);

  const addItem = () => {
    names.push(name);
    phones.push(number);
    setRefresh((current) => current + 1);
    setName("");
    setNumber();
  };

  let L = [];

  for (let i = 0; i < names.length; i++) {
    const item = (
      <Text key={i}>
        {names[i]}: {phones[i]}
      </Text>
    );
    L.push(item);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.title}>Phone Book</Text>
      <View style={styles.formStyle}>
        <TextInput
          style={styles.inputStyle}
          value={name}
          placeholder="Name"
          onChangeText={setName}
        />
        <TextInput
          style={styles.inputStyle}
          value={number}
          placeholder="Phone Number"
          onChangeText={setNumber}
        />
        <Button title="Add" onPress={addItem} />
      </View>
      {L}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },

  title: {
    fontSize: 40,
    marginBottom: 10,
  },

  inputStyle: {
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },

  formStyle: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
