import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const QuestForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);
  const [location, setLocation] = useState(initialValues.location);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Text style={styles.label}>Enter Location:</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
      <Button
        title="Save Quest"
        onPress={() => onSubmit(title, description, location)}
      />
    </View>
  );
};

QuestForm.defaultProps = {
  initialValues: {
    title: "",
    description: "",
    location: "",
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default QuestForm;
