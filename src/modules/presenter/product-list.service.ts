// @domain
import { ListProductUseCase } from "../domain/list-product.usecase";
// @infra
import { ListProductRepository } from "../data/list-product.repository";
import { AxiosAdapter } from "../infra/axios.adapter";

export class ProductListService extends ListProductRepository implements ListProductUseCase {

    constructor() {
        const endpoint = `${import.meta.env.VITE_BASE_URL_API}/products`;
        
        super(endpoint, new AxiosAdapter());
    }
}
