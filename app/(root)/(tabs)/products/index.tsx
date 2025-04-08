import { View } from "react-native";

import { Button, Title } from "@/src/components/ui";

import { useAuth } from "@hooks/auth";

import { globalStyles } from "@styles/global";

const HomeScreen = () => {
    const { signOut } = useAuth();

    return (
        <View style={ globalStyles.screen }>
            <Title>
                Bienvenido
            </Title>

            <Button 
                text="Cerrar Sesión"
                onPress={ signOut }
            />
        </View>
    );
}

export default HomeScreen;