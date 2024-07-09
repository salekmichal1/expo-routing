import { Collapsible } from "@/components/Collapsible";
import { useAuthContext } from "@/hooks/useAuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text } from "react-native";
// import Home from "./src/pages/home/Home";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Albums from "./src/pages/albums/Albums";
// import Login from "./src/pages/login/Login";
// import Signup from "./src/pages/signup/Signup";
// import CreatePosts from "./src/pages/createPosts/CreatePosts";
// import Posts from "./src/pages/posts/Posts";

export default function App() {
  const { state } = useAuthContext();

  return (
    <Collapsible title="Menu">
      <Link href="/home" asChild>
        <Pressable>
          <Text style={{ color: "#fff" }}>Home</Text>
        </Pressable>
      </Link>
      <Link href="/pages/Posts" asChild>
        <Pressable>
          <Text style={{ color: "#fff" }}>User</Text>
        </Pressable>
      </Link>
    </Collapsible>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
