import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [meridiem, setMeridiem] = useState("");

  const updateTime = () => {
    const now = new Date();
    //Set minute and second
    setMinute((now.getMinutes() < 10 && "0") + now.getMinutes());
    setSecond((now.getSeconds() < 10 && "0") + now.getSeconds());

    // Set hour and meridiem
    if (now.getHours() < 12) {
      setMeridiem("am");
      if (now.getHours() === 0) setHour(12);
      else setHour("0" + now.getHours());
    } else {
      setMeridiem("pm");
      if (now.getHours() === 24) setHour(12);
      else setHour("0" + (now.getHours() - 12));
    }
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return (
    <View style={styles.body}>
      <Text style={[styles.text, { fontWeight: "bold" }]}>
        {hour}:{minute}
      </Text>
      <Text style={styles.text}>
        :{second} {meridiem}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "wheat",
    flexDirection: "row",
    marginTop: 40,
    padding: 10,
    textAlign: "center",
  },

  text: {
    fontSize: 50,
  },
});
