// @domain/entities
import { Product } from "./product.entity";

export interface ListProductUseCase {
    getMany: () => Promise<Product[]>
}
