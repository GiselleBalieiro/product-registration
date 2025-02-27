import React from "react"
import { Button } from "@Components/ui/button"

const ListProduct = ({ product, setProduct}) => {
    const handleRemove = (indexHandleRemove) => {
        setProduct(product.filter((_,index) => index !== indexHandleRemove))
    }
    
    console.log("Produtos a serem listados:", product);

    return (
        <ul>
            {product.map((product, index) => (
                <li key={index}>
                    <p>Nome: {product.name}</p>
                    <p>Preço: {product.price}</p>
                    <p>Quantidade: {product.quantity}</p>
                    <Button
                        variant="destructive"
                        onClick={() => handleRemove(index)}>Remover</Button>
                    <Button variant="outline">Editar</Button>
                </li>
            ))}
        </ul>
    )
}

export default ListProduct;