import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "@hooks/auth";
import { colors } from "@styles/theme";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          animation: 'ios_from_right',
          contentStyle: {
            backgroundColor: colors.white,
          },
          statusBarStyle: 'dark',
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
