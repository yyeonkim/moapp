import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button, View, TextInput, StyleSheet, Text } from "react-native";

const phoneBook = [
  { id: "1", name: "Ewha", phone: 1234 },
  { id: "2", name: "June", phone: 3352 },
  { id: "3", name: "Jane", phone: 2334 },
  { id: "4", name: "Nick", phone: 1231 },
];

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refresh, setRefresh] = useState(true);

  const addItem = () => {
    phoneBook.push({ name, phone });
    setRefresh((current) => !current);
  };

  const loadData = async () => {
    const value = await AsyncStorage.getItem("phoneBook");
    phoneBook = JSON.parse(value);
    setRefresh((current) => !current);
  };

  const saveDate = async () => {
    await AsyncStorage.setItem("phoneBook", JSON.stringify(phoneBook));
  };

  const lists = [];
  for (let i = 0; i < phoneBook.length; i++) {
    const item = (
      <View key={phoneBook.id} style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{phoneBook[i].name}</Text>
        <Text style={styles.text}>{phoneBook[i].phone}</Text>
      </View>
    );
    lists.push(item);
  }

  return (
    <View style={{ marginTop: 30 }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 40 }}>Phone Book</Text>
        <Button title="SAVE" onPress={saveDate} />
        <Button title="LOAD" onPress={loadData} />
      </View>
      <View style={styles.inputBox}>
        <TextInput style={styles.input} onChangeText={setName} />
        <TextInput style={styles.input} onChangeText={setPhone} />
        <Button title="ADD" onPress={addItem} />
      </View>
      {lists}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    padding: 5,
    margin: 2,
  },

  inputBox: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    fontSize: 20,
    borderWidth: 1,
    flex: 1,
    padding: 5,
    margin: 5,
  },
});
