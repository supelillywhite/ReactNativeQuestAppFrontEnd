import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";
import { Provider as QuestProvider } from "./src/context/QuestContext";
import { Provider as GearProvider } from "./src/context/GearContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import QuestIndexScreen from "./src/screens/QuestIndexScreen";
import QuestShowScreen from "./src/screens/QuestShowScreen";
import QuestCreateScreen from "./src/screens/QuestCreateScreen";
import QuestEditScreen from "./src/screens/QuestEditScreen";
import GearIndexScreen from "./src/screens/GearIndexScreen";
import GearShowScreen from "./src/screens/GearShowScreen";
import GearCreateScreen from "./src/screens/GearCreateScreen";
import GearEditScreen from "./src/screens/GearEditScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    QuestIndex: QuestIndexScreen,
    QuestCreate: QuestCreateScreen,
    QuestShow: QuestShowScreen,
    QuestEdit: QuestEditScreen,
    GearIndex: GearIndexScreen,
    GearShow: GearShowScreen,
    GearCreate: GearCreateScreen,
    GearEdit: GearEditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs and stuff",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <QuestProvider>
        <GearProvider>
          <App />
        </GearProvider>
      </QuestProvider>
    </BlogProvider>
  );
};
