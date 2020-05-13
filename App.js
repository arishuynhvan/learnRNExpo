import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const addGoalHandler = (goal) => {
    setGoalList((goalList) => [...goalList, {abc:Math.random().toString(), value:goal}]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.abc}
        data={goalList}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
