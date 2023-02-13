// @domain
import { UpdateProductUseCase } from "../domain/update-product.usecase";
import { UnexpectedError } from "../domain/unexpected.error";
// @data
import { HttpClient, HttpStatusCode } from "./http-client.protocols";
import { ProductUpdateDTO } from "./product-update.dto";

export class UpdateProductRepository implements UpdateProductUseCase {

    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<ProductUpdateDTO>
    ) { }

    async update(product: ProductUpdateDTO): Promise<ProductUpdateDTO> {

        const httpResponse = await this.httpClient.request({
            url: `${this.url}/${product.id}`,
            method: 'put',
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
