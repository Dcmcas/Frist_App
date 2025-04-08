import { View } from "react-native";
import { useRouter } from "expo-router";

import { Button, Title } from "@/src/components/ui";

import { globalStyles } from "@styles/global";

const HomeScreen = () => {
    const router = useRouter();

    return (
        <View style={ globalStyles.screen }>
            <Title>
                Bienvenido
            </Title>

            <Button 
                text="Cerrar Sesión"
                onPress={ () => router.replace('../auth/login') }
            />
        </View>
    );
}

export default HomeScreen;
