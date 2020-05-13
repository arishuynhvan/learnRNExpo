import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableHighlight underlayColor={"yellow"} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalListItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  goalListItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
export default GoalItem;
