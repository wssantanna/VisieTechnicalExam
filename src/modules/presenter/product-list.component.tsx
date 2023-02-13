import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// @domain
import { ListProductUseCase } from '../domain/list-product.usecase';
// @data
import { ProductDTO } from '../data/product.dto';
// @presenter
import { ProductContext } from './product.provider';

type Props = {
    listService: ListProductUseCase
}

const ProductList: React.FC<Props> = ({ listService }) => {

    const navigate = useNavigate();

    // @ts-ignore 
    const [listProduct, setListProduct] = useContext(ProductContext);
    
    useEffect(() => {
        
        listService
            .getMany()
            .then((response: any) => setListProduct(response?.products))
            .catch((error: Error | any) => alert(error.message));
    },[]);

    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-between">
                    <h1 className="display-6">Produtos</h1>
                    <a className="btn btn-dark px-3 py-2" href='criar'>
                        <i className="bi bi-plus"></i> Adicionar produto
                    </a>
                </div>
            </div>

            <div className="row my-5">
                <div className="col">

                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Produto</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {listProduct.map((currentProduct : ProductDTO) => (
                                <tr key={currentProduct.id}>
                                    <th scope="row">{currentProduct.id}</th>
                                    <td>{currentProduct.title}</td>
                                    <td>{currentProduct.brand}</td>
                                    <td>{currentProduct.category}</td>
                                    <td>
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <span className="nav-link py-0" onClick={() => navigate(`${currentProduct.id}`)}>
                                                    <i className="bi bi-eye"></i>
                                                </span>
                                            </li>
                                            <li className="nav-item">
                                                <span className="nav-link py-0" onClick={() => navigate(`${currentProduct.id}`)}>
                                                    <i className="bi bi-pencil"></i>
                                                </span>
                                            </li>
                                            <li className="nav-item">
                                                <span className="nav-link py-0" onClick={() => navigate(`${currentProduct.id}`)}>
                                                    <i className="bi bi-trash3"></i>
                                                </span>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </>
}

export default ProductList;
