// @domain
import { UpdateProductUseCase } from "../domain/update-product.usecase";
// @infra
import { UpdateProductRepository } from "../data/update-product.repository";
import { AxiosAdapter } from "../infra/axios.adapter";

export default class ProductUpdateService extends UpdateProductRepository implements UpdateProductUseCase {

    constructor() {
        const endpoint = `${import.meta.env.VITE_BASE_URL_API}/products`;
        
        super(endpoint, new AxiosAdapter());
    }
}
