import React, { useEffect, useState } from 'react';
// @domain
import { ListProductUseCase } from '../domain/list-product.usecase';
// @data
import { ProductDTO } from '../data/product.dto';

type Props = {
    service: ListProductUseCase
}

const ProductList: React.FC<Props> = ({ service }) => {

    const [listProduct, setListProduct] = useState<ProductDTO[]>([]);
    
    useEffect(() => {
        service
        .getMany()
        .then((response: any) => setListProduct(response?.products));
    },[]);

    return <>
        <div className="container my-5">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-between">
                    <h1 className="display-6">Produtos</h1>
                    <button className="btn btn-dark px-3 py-2">
                        <i className="bi bi-plus"></i> Adicionar produto
                    </button>
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
                            {listProduct.map(currentProduct => (
                                <tr>
                                    <th scope="row">{currentProduct.id}</th>
                                    <td>{currentProduct.title}</td>
                                    <td>{currentProduct.brand}</td>
                                    <td>{currentProduct.category}</td>
                                    <td>
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a className="nav-link py-0" href={currentProduct.id.toString()}>
                                                    <i className="bi bi-eye"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link py-0" href={currentProduct.id.toString()}>
                                                    <i className="bi bi-pencil"></i>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link py-0" href={currentProduct.id.toString()}>
                                                    <i className="bi bi-trash3"></i>
                                                </a>
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
