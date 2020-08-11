import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const getNotes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notes");
      setNotes(response.data.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return [getNotes, notes, errorMessage];
};
