// @domain/entities
import { Product } from "./product.entity";

export interface UpdateProductUseCase {
    update: (body: Product) => Promise<Product>
}
