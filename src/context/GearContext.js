import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const normalize = (gearRawResponse, action) => {
  if (gearRawResponse.length === 0) {
  } else {
    if (gearRawResponse[0].id === action.payload.id) {
      return [action.payload];
    } else {
      return gearRawResponse.map((gear) => ({
        description: gear.attributes.description,
        id: gear.id,
        name: gear.attributes.name,
        questId: gear.attributes["quest-id"],
      }));
    }
  }
};

const gearReducer = (state, action) => {
  switch (action.type) {
    case "get_gears":
      return normalize(action.payload, action);
    case "edit_gear":
      return state.map((obj) => {
        if (action.payload.id === obj.id) {
          obj = action.payload;
        }
        return obj;
      });
    case "delete_gear":
      return state.filter((gear) => gear.id !== action.payload);
    default:
      return state;
  }
};

const getGears = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/gears");

    dispatch({ type: "get_gears", payload: response.data.data });
  };
};

const addGear = (dispatch) => {
  return async (name, description, questId, callback) => {
    await jsonServer({
      method: "POST",
      url: "/gears",
      data: {
        data: {
          type: "gears",
          attributes: {
            name: name,
            description: description,
            "quest-id": questId,
          },
        },
      },
    });

    if (callback) {
      callback();
    }
  };
};

const deleteGear = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/gears/${id}`);

    dispatch({ type: "delete_gear", payload: id });
  };
};

const editGear = (dispatch) => {
  return async (id, name, description, questId, callback) => {
    await jsonServer({
      method: "PATCH",
      url: `/gears/${id}`,
      data: {
        data: {
          id: id,
          type: "gears",
          attributes: {
            name: name,
            description: description,
            "quest-id": questId,
          },
        },
      },
    });

    dispatch({
      type: "edit_gear",
      payload: { id, name, description, questId },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  gearReducer,
  { addGear, deleteGear, editGear, getGears },
  []
);
