import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/QuestContext";
import QuestForm from "../components/QuestForm";

const QuestCreateScreen = ({ navigation }) => {
  const { addQuest } = useContext(Context);

  return (
    <QuestForm
      onSubmit={(title, description, location) => {
        addQuest(title, description, location, () =>
          navigation.navigate("QuestIndex")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default QuestCreateScreen;
