import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MemoScreen({ route }) {
  const {
    params: { _date, _expense, _memo },
  } = route;
  const [date, setDate] = useState(_date.format("YYYYMMDD"));
  const [date1, setDate1] = useState(_date.format("MMMM DD, YYYY"));
  const [expense, setExpense] = useState(_expense);
  const [memo, setMemo] = useState(_memo);

  const saveMemo = async () => {
    await AsyncStorage.setItem(date, expense);
    await AsyncStorage.setItem(date + "m", memo);
  };

  return (
    <View style={styles.box}>
      <Text style={styles.dateText}>{date1}</Text>
      <Text style={styles.row}>
        <Text style={styles.text}>Expense</Text>
        <TextInput
          style={styles.expense}
          keyboardType="numeric"
          onChangeText={setExpense}
        />
        <Button title="SAVE" onPress={saveMemo} />
      </Text>
      <TextInput
        style={styles.memo}
        placeholder="Memo"
        onChangeText={setMemo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
