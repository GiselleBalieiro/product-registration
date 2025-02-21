import React from "react"

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
                    <button onClick={() => handleRemove(index)}>Remover</button>
                </li>
            ))}
        </ul>
    )
}

export default ListProduct;