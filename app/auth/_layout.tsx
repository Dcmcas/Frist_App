import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@hooks/auth";
import { colors } from "@styles/theme";
import { StatusBar } from "expo-status-bar"; // Asegúrate de usar el StatusBar de expo-status-bar
import { Platform } from "react-native";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated]);

  return (
    <>
      <StatusBar
        style={Platform.OS === "ios" ? "dark" : "auto"} // Configuración específica para iOS
      />
      <Stack
        screenOptions={{
          animation: 'ios_from_right',
          contentStyle: {
            backgroundColor: colors.white,
          },
          headerShown: false
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    </>
  );
};

export default AuthLayout;
