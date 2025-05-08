import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import { Button, Title } from "@/src/components/ui";
import { ProductCard } from "@/src/components/products";

import { useProducts } from "@/src/hooks/products";

import { globalStyles } from "@styles/global";
import { colors, fontSizes, sizes, spacing } from "@styles/theme";

const ProductsScreen = () => {
    const [refreshing, setRefreshing] = useState(false);

    const {
        hasMoreProducts,
        isProductsLoading,
        products,
        clearProducts,
        loadProductById,
        loadProducts,
        saveProduct,
        updateProduct,
        deleteProduct
    } = useProducts();

    const handleRefresh = async (): Promise<void> => {
        setRefreshing(true);
        await loadProducts({ refresh: true });
        setRefreshing(false);
    }

    const handleEndReached = async (): Promise<void> => {
        if (!hasMoreProducts || isProductsLoading || refreshing) return;
        await loadProducts();
    }

    useEffect(() => {
        loadProducts();
    }, []);

    useEffect(() => {
        if (!refreshing) return;
        clearProducts();
    }, [refreshing]);

    return (
        <FlatList
            contentContainerStyle={globalStyles.scrollScreen}
            data={products}
            overScrollMode="never"
            ListHeaderComponent={
                <View style={{ flex: 1, marginBottom: spacing.md }}>
                    <Title>
                        Productos
                    </Title>

                    <View style={{ alignItems: 'flex-end', marginBottom: spacing.md }}>
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.red, borderRadius: 8, paddingVertical: spacing.xs, paddingHorizontal: spacing.sm }}
                            onPress={saveProduct}
                            activeOpacity={0.7}
                        >
                            <Ionicons name="add" size={18} color="#fff" />
                            <Text style={{ color: '#fff', marginLeft: spacing.xs }}>
                                Nuevo
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
            ListEmptyComponent={
                <View style={{ marginTop: '40%' }}>
                    {(!isProductsLoading && products.length === 0) && (
                        <Text style={{ color: colors.gray, fontSize: fontSizes.md - 4, textAlign: 'center' }}>
                            No hay productos
                        </Text>
                    )}
                </View>
            }
            ListFooterComponent={
                <>
                    {(isProductsLoading) && (
                        <ActivityIndicator
                            color={colors.red}
                            size={sizes.xxl}
                            style={{ marginTop: spacing.md }}
                        />
                    )}

                    {(!hasMoreProducts && products.length > 0) && (
                        <Text
                            style={{
                                color: colors.gray,
                                fontSize: fontSizes.md - 4,
                                paddingTop: spacing.md,
                                textAlign: 'center'
                            }}
                        >
                            No hay más productos
                        </Text>
                    )}
                </>
            }
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={[colors.red]}
                />
            }
            ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
            renderItem={({ item }) => (
                <ProductCard
                    product={item}
                    onViewMore={() => loadProductById(item.id)}
                    onUpdate={() => updateProduct(item.id)}
                    onDelete={() => deleteProduct(item.id)}
                />
            )}
            onEndReached={handleEndReached}
        />
    );
}

export default ProductsScreen;