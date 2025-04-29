import { View, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { Title } from "@/src/components/ui";

import { useAuth } from "@hooks/auth";

import { globalStyles } from "@styles/global";

const HomeScreen = () => {
    const { signOut, user } = useAuth();

    return (
        <View style={ globalStyles.screen }>
            <Title>
                Bienvenido{user?.fullName ? `, ${user.fullName}` : ''}
            </Title>
        </View>
    );
}

export default HomeScreen;