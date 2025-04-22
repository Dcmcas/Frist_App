import { PropsWithChildren } from "react";
import { ActivityIndicator,Pressable, StyleSheet, Text, View } from "react-native";

import { borderRadius, colors, fontSizes, spacing } from "@styles/theme";

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.red,
        height: spacing.xl,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: spacing.sm,
        borderRadius: borderRadius.sm, 
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
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.xs
    }
});

/**
 * La propiedad disabled es boolean (verdadero o falso), es opcional, no es necesario mandarla, por defecto es 
 * false. Como si la vamos a usar desde el LoginForm mando un estado que va cambiar de true a false.
 */

interface ButtonProps {
    isLoading?: boolean;
    disabled?: boolean; 
    onPress: () => void;
    text: string;
}

export const Button = ({ isLoading, disabled, text, onPress }: ButtonProps) => {
    return (
        <Pressable
            android_ripple={{ color: 'rgba(122, 19, 207, 0.1)' }}
            disabled={ disabled }
            style={ styles.button }
            onPress={ onPress }
        >
           <View style={ styles.buttonContent }>
            <Text style={ styles.buttonText }>
                { text }
            </Text>
            { (isLoading) && (
                <ActivityIndicator
                    size="small"
                    color={ colors.white }
                />
            ) }
           </View>
        </Pressable>
    );
}