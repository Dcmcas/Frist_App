import { View } from 'react-native';
import { useRouter } from 'expo-router';

import { Link, Title } from '@/src/components/ui';
import { globalStyles } from '@styles/global';

const RegisterScreen = () => {
    const router = useRouter();

    return (
        <View style={ globalStyles.screen }>
            <Title>
                Registrarse
            </Title>

            <Link 
                actionText="aquí"
                onPress={ () => router.back() }
                text="¿Ya tienes cuenta? Ingresa"
            />
        </View>
    );
}

export default RegisterScreen;