
export type HttpRequest = {
    url: string
    method: HttpMethod
    body?: any
    headers?: any
}

export interface HttpClient<R = any> {
    request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete';

export enum HttpStatusCode {
    Ok = 200,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ServerError = 500
}

export type HttpResponse<T = any> = {
    statusCode: HttpStatusCode
    body?: any
}
