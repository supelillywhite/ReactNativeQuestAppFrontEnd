import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  // const [notes, setNotes] = useState([]);
  const [errorMakeNoteMessage, setErrorMakeNoteMessage] = useState("");

  const makeNote = async (note) => {
    console.log(note);
    try {
      const newNote = axios.post("http://localhost:3000/notes", {
        text: note,
      });
    } catch (err) {
      setErrorMakeNoteMessage("Something went wrong");
    }
  };

  return [makeNote, errorMakeNoteMessage];
};
