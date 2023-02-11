// @domain
import { ListProductUseCase } from "../domain/list-product.usecase";
// @data
import { ProductDTO } from "../data/product.dto";
// @infra
import { AxiosAdapter } from "../infra/axios.adapter";

export class ProductListService implements ListProductUseCase {

    async getMany(): Promise<ProductDTO[]> {
        
        const httpClient: AxiosAdapter = new AxiosAdapter();
        const productListRequest = await httpClient.request({
            // Colocar em uma variável de ambiente...
            url: `${import.meta.env.VITE_BASE_URL_API}/products/?limit=10`,
            method: 'get'
        });
        const productListResponse: ProductDTO[] = productListRequest.body;

        return productListResponse;
    }
}
