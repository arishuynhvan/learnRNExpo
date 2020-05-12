import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Write your goal here" style={styles.input} />
        <Button title="ADD" />
      </View>
      <View style={styles.flexContainer}>
        <View style={[styles.flexbox, { backgroundColor: "red", flex: 1 }]}>
          <Text style={{ color: "white" }}>1</Text>
        </View>
        <View style={[styles.flexbox, { backgroundColor: "blue", flex: 2 }]}>
          <Text style={{ color: "white" }}>1</Text>
        </View>
        <View style={[styles.flexbox, { backgroundColor: "yellow", flex: 3 }]}>
          <Text style={{ color: "black" }}>1</Text>
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
  flexContainer: {
    marginTop:10,
    flexDirection: "row",
    width: "100%",
    height: 300,
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  flexbox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
