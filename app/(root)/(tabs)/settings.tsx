import { View } from 'react-native';

import { Title } from '@/src/components/ui';

import { globalStyles } from '@styles/global';

const SettingsScreen = () => {
    return (
        <View style={ globalStyles.screen }>
            <Title>
                Settings
            </Title>
        </View>
    );
}

export default SettingsScreen;
