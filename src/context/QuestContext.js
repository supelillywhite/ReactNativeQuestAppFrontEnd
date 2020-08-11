import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const normalize = (questRawResponse, action) => {
  if (questRawResponse.length === 0) {
  } else {
    if (questRawResponse[0].id === action.payload.id) {
      return [action.payload];
    } else {
      return questRawResponse.map((quest) => ({
        description: quest.attributes.description,
        id: quest.id,
        location: quest.attributes.location,
        title: quest.attributes.title,
      }));
    }
  }
};

const questReducer = (state, action) => {
  switch (action.type) {
    case "get_quests":
      return normalize(action.payload, action);
    case "edit_quest":
      return state.map((obj) => {
        if (action.payload.id === obj.id) {
          obj = action.payload;
        }
        return obj;
      });
    case "delete_quest":
      return state.filter((quest) => quest.id !== action.payload);
    default:
      return state;
  }
};

const getQuests = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/quests");

    dispatch({ type: "get_quests", payload: response.data.data });
  };
};

const addQuest = (dispatch) => {
  return async (title, description, location, callback) => {
    await jsonServer({
      method: "POST",
      url: "/quests",
      data: {
        data: {
          type: "quests",
          attributes: {
            title: title,
            description: description,
            location: location,
          },
        },
      },
    });

    if (callback) {
      callback();
    }
  };
};

const deleteQuest = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/quests/${id}`);

    dispatch({ type: "delete_quest", payload: id });
  };
};

const editQuest = (dispatch) => {
  return async (id, title, description, location, callback) => {
    await jsonServer({
      method: "PATCH",
      url: `/quests/${id}`,
      data: {
        data: {
          id: id,
          type: "quests",
          attributes: {
            title: title,
            description: description,
            location: location,
          },
        },
      },
    });

    dispatch({
      type: "edit_quest",
      payload: { id, title, description, location },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  questReducer,
  { addQuest, deleteQuest, editQuest, getQuests },
  []
);
