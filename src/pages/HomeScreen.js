import React from "react";
import { StyleSheet, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation }) {
  const onDateChange = async (d) => {
    const _date = d.format("YYYYMMDD");
    const _expense = "";
    const _memo = "";
    const value = await AsyncStorage.getItem(_date);
    const valueM = await AsyncStorage.getItem(_date + "m");

    if (value !== null) {
      _expense = value;
      _memo = valueM;
    }
    navigation.navigate("Memo", { _date: d, _expense, _memo });
  };

  return (
    <View style={styles.container}>
      <CalendarPicker onDateChange={onDateChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
});
