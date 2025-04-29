import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl, Text, View } from "react-native";
import { Title } from "@/src/components/ui";
import { ProductCard } from "@/src/components/products";
import productsData from '@data/products.json';
import { globalStyles } from "@styles/global";
import { colors, fontSizes, sizes, spacing } from "@styles/theme";

const ProductsScreen = () => {
    const [ isProductsLoading, setIsProductsLoading ] = useState(false);
    const [ products, setProducts ] = useState<typeof productsData>([]);
    const [ refreshing, setRefreshing ] = useState(false);

    const handleLoadProducts = async (): Promise<void> => {
        setIsProductsLoading(true);

        // Simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setProducts(productsData);
        // setProducts([]);
        setIsProductsLoading(false);
    }

    const handleRefresh = async (): Promise<void> => {
        setRefreshing(true);
        await handleLoadProducts();
        setRefreshing(false);
    }

    useEffect(() => {
        handleLoadProducts();
    }, []);

    useEffect(() => {
        if (!refreshing) return;
        setProducts([]);
    }, [ refreshing ]);

    return (
        <FlatList 
            contentContainerStyle={ globalStyles.scrollScreen }
            data={ products}
            overScrollMode="never"
            ListHeaderComponent={
                <Title>
                    Productos
                </Title>
            }
            ListEmptyComponent={
                <View style={{ marginTop: 50 }}>
                    { (!isProductsLoading && products.length === 0) && (
                        <Text style={{ color: colors.gray, fontSize: fontSizes.md - 4, textAlign: 'center' }}>
                            No hay productos
                        </Text>
                    ) }

                    { (isProductsLoading) && (
                        <ActivityIndicator 
                            color={ colors.red }
                            size={ sizes.xxl }
                        />
                    ) }
                </View>
            }
            ListFooterComponent={
                <Text 
                    style={{
                        paddingTop: spacing.md, 
                        color: colors.gray, 
                        fontSize: fontSizes.md - 4, 
                        textAlign: 'center'
                    }}
                >
                    No hay más productos
                </Text>
            }
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ handleRefresh }
                    colors={[ colors.red ]}
                />
            }
            ItemSeparatorComponent={ () => <View style={{ height: spacing.md }} /> }
            renderItem={ ({ item }) => <ProductCard product={ item } />}
        />
    );
}

export default ProductsScreen;