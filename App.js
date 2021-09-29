import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import About from "./screens/about";
import Hello from "./screens/hello";
import Home from "./screens/home";
import Count from "./screens/count";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Count" component={Count} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
