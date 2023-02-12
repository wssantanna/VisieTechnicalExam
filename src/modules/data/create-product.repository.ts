// @domain
import { CreateProductUseCase } from "../domain/create-product.usecase";
import { UnexpectedError } from "../domain/unexpected.error";
// @data
import { HttpClient, HttpStatusCode } from "./http-client.protocols";
import { ProductCreateDTO } from "./product-create.dto";
import { ProductDTO } from "./product.dto";

export class CreateProductRepository implements CreateProductUseCase {

    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<ProductCreateDTO>
    ) { }

    async create(product: ProductCreateDTO): Promise<ProductDTO> {

        const httpResponse = await this.httpClient.request({
            url: this.url,
            method: 'post',
            body: product
        });

        switch(httpResponse.statusCode) {
            case HttpStatusCode.Ok: 
                return httpResponse.body;
            case HttpStatusCode.BadRequest: 
                throw new UnexpectedError(); // refatorar com um error personalizado
            default : 
                throw new UnexpectedError();
        }
    }
}
