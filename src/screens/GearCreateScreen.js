import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/GearContext";
import GearForm from "../components/GearForm";

const GearCreateScreen = ({ navigation }) => {
  const { addGear } = useContext(Context);

  return (
    <GearForm
      onSubmit={(name, description, questId) => {
        addGear(name, description, questId, () =>
          navigation.navigate("GearIndex")
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default GearCreateScreen;
