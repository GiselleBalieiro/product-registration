import React, { useState } from "react"
import Button from "../component/Button";
import { Link } from "react-router-dom";

const ListProduct = ({ product, setProduct, productEdit}) => {
    const [filterList, setFilterList] = useState("")

    const handleRemove = (indexHandleRemove) => {
        setProduct(product.filter((_,index) => index !== indexHandleRemove))
    }
    
    const productFilter = product.filter((product) => {
        return product.name.toLowerCase().includes(filterList.toLowerCase())
    })

    return (
        <>
        <input 
            type="text"
            placeholder="Busque um produto"
            value={filterList}  
            onChange={(e) => setFilterList(e.target.value)}>
        </input>
        <ul>
            {productFilter.length > 0 ? (productFilter.map((product, index) => (
                <li key={index}>
                    <p>Nome: {product.name}</p>
                    <p>Preço: R${product.price}</p>
                    <p>Quantidade: {product.quantity} Unidades</p>
                    <p>Categoria: {product.option}</p>
                    <Button
                        onClick={() => handleRemove(index)}>Remover</Button>
                    <Link to="/register">
                        <Button
                            onClick={() => productEdit(product)}>
                                Editar
                        </Button>
                    </Link>
                </li>
            )))
            : (
                productFilter && <li>Nenhum produto registrado</li>
            )}
        </ul>
        </>
    )
}

export default ListProduct;