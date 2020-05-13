import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const addGoalHandler = (goal) => {
    setGoalList((goalList) => [
      ...goalList,
      { uid: Math.random().toString(), value: goal },
    ]); 
  };
  const removeGoalHandler = (goalID) => {
    setGoalList((goalList) => {
      return goalList.filter((goal)=> goal.uid !== goalID);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={removeGoalHandler.bind(this,itemData.item.uid)}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
