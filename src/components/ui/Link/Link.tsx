import { Text, TouchableOpacity, View } from 'react-native';

import { LinkProps } from './interfaces';
import { styles } from './styles';

export const Link = ({ actionText, onPress, text }: LinkProps) => {
    return (
        <View style={ styles.linkContainer }>
            <Text style={ styles.linkText }>
                { text }
            </Text>

            <TouchableOpacity
                activeOpacity={ 0.75 }
                onPress={ onPress }
            >
                <Text style={ styles.linkAction }>
                    { actionText }
                </Text>
            </TouchableOpacity>
        </View>
    );
}