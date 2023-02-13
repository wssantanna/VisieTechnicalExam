// @domain
import { Product } from "../domain/product.entity";

export interface ProductUpdateDTO extends Product { id?: number };
