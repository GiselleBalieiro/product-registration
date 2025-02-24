import React from "react"
import Button from "../Components/Button";

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
                        className="text-white bg-red-500" 
                        onClick={() => handleRemove(index)}>Remover</Button>
                    <Button className="text-white bg-blue-500 px-8 py-3 font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Editar</Button>
                </li>
            ))}
        </ul>
    )
}

export default ListProduct;