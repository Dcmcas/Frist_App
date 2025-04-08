import { View } from 'react-native';

import { Title } from '@/src/components/ui';

import { useAuth } from '@hooks/auth';

import { globalStyles } from '@styles/global';

const TabsScreen = () => {
    const { user } = useAuth();

    return (
        <View style={ globalStyles.screen }>
            <Title>
                Bienvenido 
            </Title>
        </View>
    );
}

export default TabsScreen;