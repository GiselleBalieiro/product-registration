import React from "react"
import Button from "../component/Button";
import { Link } from "react-router-dom";
const ListProduct = ({ product, setProduct, productEdit, option}) => {
    const handleRemove = (indexHandleRemove) => {
        setProduct(product.filter((_,index) => index !== indexHandleRemove))
    }
    
    console.log("Produtos a serem listados:", product);

    return (
        <ul>
            {product.map((product, index) => (
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
            ))}
        </ul>
    )
}

export default ListProduct;