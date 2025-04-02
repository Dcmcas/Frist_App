import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors, fontSizes, spacing } from "@styles/theme";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.purple,
        height: spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.sm,
        borderRadius: 12, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
        elevation: 5, 
    },

    buttonText: {
        color: colors.white,
        fontSize: fontSizes.sm,
    },
});

interface ButtonProps {
    onPress: () => void;
    text: string;
}

export const Button = ({ text, onPress }: ButtonProps) => {
    return (
        <Pressable
            android_ripple={{ color: 'rgba(122, 19, 207, 0.1)' }}
            style={ styles.button }
            onPress={ onPress }
        >
            <Text style={ styles.buttonText }>
                { text }
            </Text>
        </Pressable>
    );
}