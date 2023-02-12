// @domain/entities
import { Product } from "./product.entity";

export interface CreateProductUseCase {
    create: (body: Product) => Promise<{ created: boolean }>
}
