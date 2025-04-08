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

/**
 * La propiedad disabled es boolean (verdadero o falso), es opcional, no es necesario mandarla, por defecto es 
 * false. Como si la vamos a usar desde el LoginForm mando un estado que va cambiar de true a false.
 */

interface ButtonProps {
    disabled?: boolean; 
    onPress: () => void;
    text: string;
}

export const Button = ({ disabled, text, onPress }: ButtonProps) => {
    return (
        <Pressable
            android_ripple={{ color: 'rgba(122, 19, 207, 0.1)' }}
            disabled={ disabled }
            style={ styles.button }
            onPress={ onPress }
        >
            <Text style={ styles.buttonText }>
                { text }
            </Text>
        </Pressable>
    );
}