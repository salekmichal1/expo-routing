import { useAuthContext } from "@/hooks/useAuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
// import Home from "./src/pages/home/Home";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Albums from "./src/pages/albums/Albums";
// import Login from "./src/pages/login/Login";
// import Signup from "./src/pages/signup/Signup";
// import CreatePosts from "./src/pages/createPosts/CreatePosts";
// import Posts from "./src/pages/posts/Posts";

export default function App() {
  const { state } = useAuthContext();

  return <Text>qwerty</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
