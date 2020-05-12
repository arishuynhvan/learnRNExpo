import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Write your goal here" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View>
        <View style={[styles.flexbox, { backgroundColor: "red" }]}>
          <Text style={{ color: "white" }}>1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    height: "100%",
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  flexbox: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
