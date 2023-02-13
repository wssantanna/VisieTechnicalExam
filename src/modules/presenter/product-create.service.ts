// @domain
import { CreateProductUseCase } from "../domain/create-product.usecase";
// @infra
import { CreateProductRepository } from "../data/create-product.repository";
import { AxiosAdapter } from "../infra/axios.adapter";

export default class ProductCreateService extends CreateProductRepository implements CreateProductUseCase {

    constructor() {
        const endpoint = `${import.meta.env.VITE_BASE_URL_API}/products/add`;
        
        super(endpoint, new AxiosAdapter());
    }
}
