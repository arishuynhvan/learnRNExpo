import React from "react";
import {View, Text, StyleSheet} from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalListItem}>
      <Text>{props.title}</Text>
    </View>
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
})
export default GoalItem;