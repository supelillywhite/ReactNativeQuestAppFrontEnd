import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/QuestContext";
import QuestForm from "../components/QuestForm";

const QuestEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editQuest } = useContext(Context);

  const quest = state.find((quest) => quest.id === id);

  return (
    <QuestForm
      initialValues={{
        title: quest.title,
        description: quest.description,
        location: quest.location,
      }}
      onSubmit={(title, description, location) => {
        editQuest(id, title, description, location, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default QuestEditScreen;
