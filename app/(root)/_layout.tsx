import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

import { colors, fontSizes } from "@styles/theme";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShadowVisible: false,
                tabBarStyle: {
                    borderWidth: 0,
                    elevation: 0,
                    height: 64
                },
                tabBarActiveTintColor: colors.red,
                tabBarInactiveTintColor: colors.gray,
                tabBarLabelStyle: {
                    fontSize: fontSizes.sm - 2
                },
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            color={ color }
                            name="home"
                            size={ size }
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="products"
                options={{
                    title: 'Productos',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            color={ color }
                            name="bag-handle"
                            size={ size }
                        />
                    )
                }}
            />

            <Tabs.Screen 
                name="settings"
                options={{
                    title: 'Configuración',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons 
                            color={ color }
                            name="settings"
                            size={ size }
                        />
                    )
                }}
            />
        </Tabs>
    );
}

export default TabsLayout;

