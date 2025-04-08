import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import { colors, fontSizes, spacing } from '@styles/theme';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },

    label: {
        fontSize: fontSizes.sm, 
        color: colors.black, 
        marginBottom: spacing.xs
    },

    input: {
        borderColor: colors.gray,
        borderRadius: spacing.xs,
        borderWidth: 2,
        color: colors.black,
        fontSize: fontSizes.sm,
        height: spacing.xxl,
        paddingHorizontal: spacing.xs,
        width: '100%'
    }
});

interface FormFieldProps extends Omit<TextInputProps, 'style'> {
    label: string;
    labelStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
}

export const FormField = ({ style, label, labelStyle, textInputStyle, ...rest }: FormFieldProps) => {
    return (
        <View style={[ styles.container, style ]}>
            <Text style={[ styles.label, labelStyle ]}>
                { label }
            </Text>

            <TextInput 
                style={[ styles.input, textInputStyle ]}
                { ...rest }
            />
        </View>
    );
}