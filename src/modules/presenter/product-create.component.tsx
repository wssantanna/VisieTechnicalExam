import React from 'react';
import { useNavigate } from 'react-router-dom';
// @domain
import { CreateProductUseCase } from '../domain/create-product.usecase';
// @shared
import { FormUtils } from '../shared/form.utils';

type Props = {
    createService: CreateProductUseCase
}

const ProductCreate: React.FC<Props> = ({ createService }) => {

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        
        event.preventDefault();
        
        const product = FormUtils.getDataNotNullOrUndefined(event.target);
        try {

            await createService.create(product);

            alert('Produto foi cadastrado com sucesso!');
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
                    <h1 className="display-6">Cadastrar um novo produto</h1>
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
                        required
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input 
                        className="form-control form-control-lg"
                        name="brand"
                        type="text" 
                        placeholder="Marca" 
                        aria-label="Marca do produto" 
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input 
                        className="form-control form-control-lg"
                        name="price"
                        type="text" 
                        placeholder="Preço" 
                        aria-label="Preço do produto" 
                    />
                </div>
                <div className="col-12 col-md-4">
                    <input 
                        className="form-control form-control-lg"
                        name="discountPercentege"
                        type="text" 
                        placeholder="Desconto" 
                        aria-label="Desconto no preço do produto" 
                    />
                </div>
                <div className="col-12">
                    <textarea 
                        className="form-control form-control-lg" 
                        name="description"
                        placeholder="Descrição do produto" 
                        rows={4}
                    />
                </div>
                <div className="col-12 d-grid gap-4">
                    <button className="btn btn-lg btn-dark">Cadastrar</button>
                </div>
            </form>
        </div>
    </>
}

export default ProductCreate;
