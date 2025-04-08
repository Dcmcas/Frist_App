import { View } from 'react-native';

import { Title } from '@/src/components/ui';

import { globalStyles } from '@styles/global';

const TabsScreen = () => {
    return (
        <View style={ globalStyles.screen }>
            <Title>
                Home
            </Title>
        </View>
    );
}

export default TabsScreen;

