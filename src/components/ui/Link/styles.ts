import { StyleSheet } from 'react-native';

import { colors, fontSizes, spacing } from '@styles/theme';

export const styles = StyleSheet.create({
    linkContainer: {
        marginTop: spacing.md,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: spacing.xs - 2
    },

    linkText: {
        fontSize: fontSizes.sm
    },

    linkAction: {
        fontSize: fontSizes.sm,
        color: colors.red
    }
});