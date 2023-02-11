import axios, { AxiosResponse, AxiosError } from 'axios'; 
// @data
import { HttpClient, HttpRequest, HttpResponse } from "../data/http-client.protocols";

export class AxiosAdapter implements HttpClient {

    async request(data: HttpRequest): Promise<HttpResponse> {
        
        let response: AxiosResponse;

        try {

            response = await axios.request({
                url: data.url,
                method: data.method,
                headers: data.headers,
                data: data.body
            });
        }
        catch(error: any | AxiosError) {

            response = error.response;
        }

        return {
            statusCode: response.status,
            body: response.data
        }
    }
}
