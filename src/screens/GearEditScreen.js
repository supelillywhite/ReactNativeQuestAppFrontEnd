import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/GearContext";
import GearForm from "../components/GearForm";

const GearEditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editGear } = useContext(Context);

  const gear = state.find((gear) => gear.id === id);

  return (
    <GearForm
      initialValues={{
        name: gear.name,
        description: gear.description,
        questId: gear.questId,
      }}
      onSubmit={(name, description, questId) => {
        editGear(id, name, description, questId, () => navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default GearEditScreen;
