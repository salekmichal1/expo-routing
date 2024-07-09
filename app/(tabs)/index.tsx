import { AuthContextProvider } from "@/context/AuthContext";
import App from "./App";

import { Link } from "expo-router";
import { View } from "react-native";

export default function Page() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}
