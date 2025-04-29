import { colors } from "@/src/styles/theme";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar"; // Asegúrate de usar el StatusBar de expo-status-bar

const TabsLayout = () => {
  return (
    <>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "auto"} // Configuración específica para iOS
      />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.white,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="settings" />
      </Tabs>
    </>
  );
};