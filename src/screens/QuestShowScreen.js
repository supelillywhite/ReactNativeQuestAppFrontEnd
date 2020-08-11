import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Context as QuestContext } from "../context/QuestContext";
import { EvilIcons } from "@expo/vector-icons";
import GearIndex from "../components/GearIndex";

const QuestShowScreen = ({ navigation }) => {
  const { state } = useContext(QuestContext);

  const quest = state.find((quest) => quest.id === navigation.getParam("id"));

  return (
    <View>
      <Text>{quest.title}</Text>
      <Text>{quest.description}</Text>
      <Text>{quest.location}</Text>

      <GearIndex questId={quest.id} navigation={navigation} quests={state} />
    </View>
  );
};

QuestShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("QuestEdit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default QuestShowScreen;
