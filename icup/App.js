import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

{
  /* <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Login" component={Login} />
</Stack.Navigator>
</NavigationContainer> */
}
