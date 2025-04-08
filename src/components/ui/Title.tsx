import { PropsWithChildren } from "react";
import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { colors, fontSizes, spacing } from "@/src/styles/theme";
import React from "react";

const styles = StyleSheet.create({
    title: {
        color: colors.black,
        fontSize: fontSizes.lg,
        fontWeight: 'bold',
        marginBottom: spacing.lg
    },
});

interface TitleProps {
    style?: StyleProp<TextStyle>
}

export const Title = ({ children, style }: PropsWithChildren<TitleProps>) => {

    return (
        <Text style={[ styles.title, style ]}>
            { children }
        </Text>
    );
}