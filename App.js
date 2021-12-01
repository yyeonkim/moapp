import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

export default function App() {
  const [date, setDate] = useState("");
  const [date1, setDate1] = useState("");
  const [expense, setExpense] = useState("");
  const [memo, setMemo] = useState("");

  const onDateChange = (date) => {
    setDate(date.format("YYYYMMDD"));
    setDate1(date.format("MMMM DD, YYYY"));
  };

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
      <View style={styles.box}>
        <Text style={styles.dateText}>{date1}</Text>
        <Text style={styles.row}>
          <Text style={styles.text}>Expense</Text>
          <TextInput
            style={styles.expense}
            keyboardType="numeric"
            onChangeText={setExpense}
          />
          <Button title="SAVE" />
        </Text>
        <TextInput
          style={styles.memo}
          placeholder="Memo"
          onChangeText={setMemo}
        />
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

  dateText: {
    fontSize: 20,
    marginVertical: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    fontSize: 16,
  },

  expense: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    fontSize: 16,
    color: "blue",
  },

  memo: {
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 10,
    color: "blue",
  },
});
