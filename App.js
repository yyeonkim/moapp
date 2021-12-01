import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function App() {
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");

  const onDateChange = (date) => {
    setDate(date.format("YYYYMMDD"));
    setDate1(date.format("MMMM DD, YYYY"));
  };
  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={styles.box}>
        <Text>Date: {date}</Text>
        <Text style={styles.text}>{date1}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },

  box: {
    margin: 20,
  },

  text: {
    fontSize: 20,
    marginVertical: 10,
  },
});
