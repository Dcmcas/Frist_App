import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { borderRadius, colors, fontSizes, spacing } from "@styles/theme";
import { Button } from "../ui";

export interface ProductCardProps {
    onViewMore: () => void;
    onUpdate: () => void;
    onDelete: () => void;

    product: {
        id: string;
        name: string;
        description: string;
        image: string;
        price: number;
        stock: number;
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.xs
    },

    cardImage: {
        borderRadius: borderRadius.xs,
        minWidth: 100, 
        minHeight: 200,
    },

    cardContent: {
        padding: spacing.sm
    },

    cardTitle: {
        color: colors.black,
        fontSize: fontSizes.md,
        fontWeight: 'bold',
        marginBottom: spacing.sm
    },

    cardDescription: {
        color: colors.gray,
        fontSize: fontSizes.sm,
        marginBottom: spacing.sm
    },

    cardFooter: {
        borderTopWidth: 1,
        borderTopColor: colors.gray,
        paddingTop: spacing.sm,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    productPrice: {
        fontSize: fontSizes.md - 4,
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.red,
        paddingVertical: spacing.xs,
        paddingHorizontal: spacing.sm,
        borderRadius: borderRadius.md,
    },

    productStock: {
        backgroundColor: colors.black,
        borderRadius: borderRadius.md,
        color: colors.white,
        fontSize: fontSizes.sm - 2,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        alignSelf: 'flex-start',
        marginBottom: spacing.sm
    },
});

export const ProductCard = ({ product, onDelete, onUpdate, onViewMore }: ProductCardProps) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <View style={ styles.card }>
            <Image
                source={{ uri: product.image }}
                style={ styles.cardImage }
            />

            <View style={ styles.cardContent }>
                <Text style={ styles.cardTitle }>
                    { product.name }
                </Text>

                <Text style={ styles.productStock }>
                    Stock: { product.stock }
                </Text>

                {showDescription && (
                    <Text style={ styles.cardDescription }>
                        { product.description }
                    </Text>
                )}

                <View style={{ flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm }}>
                    <TouchableOpacity
                        onPress={() => setShowDescription(!showDescription)}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.red, borderRadius: 8, paddingVertical: spacing.xs }}
                    >
                        <Ionicons name={showDescription ? "chevron-up" : "chevron-down"} size={18} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onUpdate}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.red, borderRadius: 8, paddingVertical: spacing.xs }}
                    >
                        <Ionicons name="reload" size={18} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onDelete}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.red, borderRadius: 8, paddingVertical: spacing.xs }}
                    >
                        <Ionicons name="trash" size={18} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={ styles.cardFooter }>
                    <Text style={ styles.productPrice }>
                        ${ product.price }
                    </Text>
                </View>
            </View>
        </View>
    );
}