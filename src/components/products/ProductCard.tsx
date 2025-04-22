import { View, Image, Text } from "react-native";
import { StyleSheet } from "react-native";
import { borderRadius, colors, fontSizes, spacing } from "@styles/theme";

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        stock: number;
        image: string;
    };
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: borderRadius.xs,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 16,
        padding: 16,
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: borderRadius.xs
    },
    cardContent: {
        padding: spacing.md,
    },
    cardContentName: {
        fontSize: fontSizes.md,
        fontWeight: 'bold',
        marginBottom: spacing.sm
    },
    cardContentDescription: {
        fontSize: 14,
        color: colors.gray,
        marginBottom: spacing.sm
    },
    cardContentPrice: {
        fontSize: fontSizes.md,
        fontWeight: 'bold',
        color: colors.red
    },
    cardContentStock: {
        fontSize: fontSizes.sm,
        color: colors.gray,
        paddingBottom: spacing.sm
        

    },
    
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: spacing.sm
    }
  
});
export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: product.image }}
                style={styles.cardImage}
            />
           <View style={styles.cardContent}>
           <Text style={styles.cardContentName}>
                {product.name}
            </Text>
            <Text style={styles.cardContentStock}>
                Stock: {product.stock}
            </Text>
            <Text style={styles.cardContentDescription}>
                {product.description}
            </Text>
           <View style={styles.cardFooter}>
           <Text style={styles.cardContentPrice}>
                ${product.price}
            </Text>
           </View>
           </View>

        </View>
    )

}
