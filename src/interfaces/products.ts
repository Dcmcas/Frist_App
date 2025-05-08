import { QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";

export interface ProductModel {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
}

export type ProductModelWithOutId = Omit<ProductModel, 'id'>;

export interface ProductDatabase {
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
}

export type LastVisibleProduct = QueryDocumentSnapshot<ProductModelWithOutId,
 WithFieldValue<ProductDatabase>>;
