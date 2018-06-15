import { Navigation } from "react-native-navigation";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/Home/SharePlace";
import FindPlaceScreen from "./src/screens/Home/FindPlace";

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});