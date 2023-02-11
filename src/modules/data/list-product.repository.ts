// @domain
import { ListProductUseCase } from "../domain/list-product.usecase";
import { UnexpectedError } from "../domain/product-unexpected.error";
// @data
import { HttpClient, HttpStatusCode } from "./http-client.protocols";
import { ProductDTO } from "./product.dto";

export class ListProductRepository implements ListProductUseCase {

    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<ProductDTO>
    ) { }

    async getMany(): Promise<ProductDTO[]> {

        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'get'
        });

        switch(httpResponse.statusCode) {
            case HttpStatusCode.Ok: 
                return httpResponse.body;
            default : 
                throw new UnexpectedError() 
        }
    }
}
