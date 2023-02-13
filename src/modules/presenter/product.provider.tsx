import React, { createContext, ReactElement, useState } from "react";
// @data
import { ProductDTO } from "../data/product.dto";

// @ts-ignore 
export const ProductContext = createContext();

type Props = {
    children: ReactElement
}

const ProductProvider: React.FC<Props> = ({ children }) => {

    const [listProduct, setListProduct] = useState<ProductDTO[]>([]);

    return <>
        <ProductContext.Provider value={[listProduct, setListProduct ]}>
            {children}
        </ProductContext.Provider>
    </>;
}

export default ProductProvider;
