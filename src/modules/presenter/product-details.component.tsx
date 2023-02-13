import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// @data
import { ProductDTO } from '../data/product.dto';
// @domain
import { UpdateProductUseCase } from '../domain/update-product.usecase';
// @shared
import { FormUtils } from '../shared/form.utils';
import { ProductContext } from './product.provider';

type Props = {
    updateService: UpdateProductUseCase
}

const ProductDetails: React.FC<Props> = ({ updateService }) => {

    const navigate = useNavigate();
    const { idProduct } = useParams();
    
    // @ts-ignore
    const [listProduct] = useContext(ProductContext);
    
    
    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        // @ts-ignore
        const productFound = getProductById(idProduct); 
        
        setProduct(productFound);
    }, []);

    const getProductById = (idProduct: number | string) => listProduct.find((product: ProductDTO) => product.id == idProduct);

    // EXTRA: Implementar um handleSubmit utilitário a partir de uma implementação de composição.
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        
        event.preventDefault();

        const productFormData = FormUtils.getDataNotNullOrUndefined(event.target);

        // 1. Condicionar o `service` que será utilizado para executar as operações de editar e excluir.
        try {

            await updateService.update({ ...productFormData, id: idProduct});

            alert('Produto foi atualizado com sucesso!');

            navigate('/');

        }
        catch(error: Error | any) {
            
            alert(error.message)
        }
    }

    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className="display-6">Detalhes do produto</h1>
                </div>
            </div>
            <form 
                className="row gy-4 mt-5"
                name="createProductForm"
                onSubmit={handleSubmit}
            >
                <div className="col-12">
                    <input 
                        className="form-control form-control-lg"
                        name="title"
                        type="text" 
                        placeholder="Título" 
                        aria-label="Titulo do produto"
                        value={product?.title}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input 
                        className="form-control form-control-lg"
                        name="brand"
                        type="text" 
                        placeholder="Marca" 
                        aria-label="Marca do produto"
                        value={product?.brand} 
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input 
                        className="form-control form-control-lg"
                        name="price"
                        type="text" 
                        placeholder="Preço" 
                        aria-label="Preço do produto" 
                        value={product?.price}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input 
                        className="form-control form-control-lg"
                        name="discountPercentege"
                        type="text" 
                        placeholder="Desconto" 
                        aria-label="Desconto no preço do produto" 
                        value={product?.discountPercentege}
                    />
                </div>
                <div className="col-12">
                    <textarea 
                        className="form-control form-control-lg" 
                        name="description"
                        placeholder="Descrição do produto" 
                        rows={4}
                        value={product?.description}
                    />
                </div>
                <div className="col-12 d-grid gap-4">
                    <button className="btn btn-lg btn-dark">Editar</button>
                    <button className="btn btn-lg">Excluir</button>
                </div>
            </form>
        </div>
    </>
}

export default ProductDetails;
