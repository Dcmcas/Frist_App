import { FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions, WithFieldValue } from 'firebase/firestore';

import { ProductDatabase, ProductModelWithOutId } from '../interfaces/products';

export class ProductConverter implements FirestoreDataConverter<ProductModelWithOutId, ProductDatabase> {
    public toFirestore(product: WithFieldValue<ProductModelWithOutId>): WithFieldValue<ProductDatabase> {
        return {
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            stock: product.stock
        }
    }

    public fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): ProductModelWithOutId {
        const data = snapshot.data(options) as ProductDatabase;

        return {
            name: data.name,
            description: data.description,
            image: data.image,
            price: data.price,
            stock: data.stock
        }
    }
}