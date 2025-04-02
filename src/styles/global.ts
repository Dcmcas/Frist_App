import { StyleSheet } from 'react-native';
import { spacing } from './theme';

export const globalStyles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: spacing.md,
    },

    scrollScreen: {
        flexGrow: 1,
        padding: spacing.md
    }
});