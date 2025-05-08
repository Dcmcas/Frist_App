import { useState } from 'react';
import { Alert } from 'react-native';
import { FirebaseError } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, startAfter, updateDoc, where } from 'firebase/firestore';

import { firestore } from '@config/firebase';

import { ProductConverter } from '@converters';

import { LastVisibleProduct, ProductModel } from '@interfaces/products';
import { LoadOptions } from '@interfaces/ui';

const useProducts = () => {
    const docsPerPage = 5;

    const [ hasMoreProducts, setHasMoreProducts ] = useState<boolean>(true);
    const [ isProductsLoading, setIsProductsLoading ] = useState<boolean>(false);

    const [ lastVisibleProduct, setLastVisibleProduct ] = useState<LastVisibleProduct | null>(null);
    const [ products, setProducts ] = useState<ProductModel[]>([]);

    const clearProducts = () => {
        setHasMoreProducts(true);
        setProducts([]);
        setLastVisibleProduct(null);
    }

    const loadProductById = async (productId: string): Promise<void> => {
        try {
            const docRef = doc(firestore, 'products', productId)
                .withConverter(new ProductConverter());

            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                Alert.alert('Error', 'El producto no existe');
                return;
            }

            const product: ProductModel = {
                ...docSnap.data(),
                id: docSnap.id
            }

            Alert.alert('Producto', JSON.stringify(product, null, 2));
        } 
        catch (error) {
            let message = 'Ocurrio un error inesperado';
            if (error instanceof FirebaseError) message = error.message;

            console.log(error);
            Alert.alert('Error', message);
        }
    }

    const loadProducts = async (options?: LoadOptions): Promise<void> => {
        setIsProductsLoading(true);

        try {
            const collectionRef = collection(firestore, 'products')
                .withConverter(new ProductConverter());

            const q = query(
                collectionRef,
                // where('status', '==', 'active'),
                orderBy('name', 'asc'),
                startAfter(options?.refresh ? null : lastVisibleProduct),
                limit(docsPerPage)
            );

            const querySnapshot = await getDocs(q);
            const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

            const products: ProductModel[] = querySnapshot.docs.map(doc => ({ 
                ...doc.data(),
                id: doc.id
            }));

            if (lastVisibleProduct) setProducts(prev => [ ...prev, ...products ]);
            else setProducts(products);

            const hasMore = querySnapshot.docs.length === docsPerPage;

            setLastVisibleProduct(hasMore ? lastVisible : null);
            setHasMoreProducts(hasMore);
        } 
        catch (error) {
            let message = 'Ocurrio un error inesperado';
            if (error instanceof FirebaseError) message = error.message;

            console.log(error);
            Alert.alert('Error', message);
        }
        finally {
            setIsProductsLoading(false);
        }
    }

    const saveProduct = async (): Promise<void> => {
        try {
            const collectionRef = collection(firestore, 'products')
                .withConverter(new ProductConverter());

            const data = {
                name: 'Producto',
                description: 'Descripción del producto',
                image: 'http://dummyimage.com/1920x1280.png/ff4444/ffffff',
                price: 100,
                stock: 10
            }

            const docSnap = await addDoc(collectionRef, data);

            const newProduct: ProductModel = {
                ...data,
                id: docSnap.id
            }

            setProducts(prev => [ newProduct, ...prev ]);
        } 
        catch (error) {
            let message = 'Ocurrio un error inesperado';
            if (error instanceof FirebaseError) message = error.message;

            console.log(error);
            Alert.alert('Error', message);
        }
    }

    const updateProduct = async (productId: string): Promise<void> => {
        try {
            const docRef = doc(firestore, 'products', productId)
                .withConverter(new ProductConverter());

            const newPrice = Math.floor(Math.random() * 100) + 1;
            console.log({ newPrice });

            await updateDoc(docRef, { price: newPrice });

            setProducts(products.map(
                p => (p.id === productId) ? { ...p, price: newPrice } : p
            ));
        } 
        catch (error) {
            let message = 'Ocurrio un error inesperado';
            if (error instanceof FirebaseError) message = error.message;

            console.log(error);
            Alert.alert('Error', message);
        }
    }

    const deleteProduct = async (productId: string): Promise<void> => {
        try {
            const docRef = doc(firestore, 'products', productId)
                .withConverter(new ProductConverter());

            await deleteDoc(docRef);
            // await updateDoc(docRef, { status: 'inactive' });
            setProducts(products.filter(p => p.id !== productId));
        } 
        catch (error) {
            let message = 'Ocurrio un error inesperado';
            if (error instanceof FirebaseError) message = error.message;

            console.log(error);
            Alert.alert('Error', message);
        }
    }

    return {
        hasMoreProducts,
        isProductsLoading,
        products,

        clearProducts,
        loadProductById,
        loadProducts,
        saveProduct,
        updateProduct,
        deleteProduct
    }
}

export default useProducts;