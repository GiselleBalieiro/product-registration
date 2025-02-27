
import React, { useState } from "react"
import { Button } from "@Components/ui/button"
import Input from "../Components/Components/Input";

const ProductRegistration = ({product, setProduct}) => {
    const [name, setName] = useState("");
    const [price, setPrice ] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newProduct = {name, price, quantity};
        setProduct([...product, newProduct])
    
        console.log("Produto cadastrado com sucesso!", name, price, quantity);
        console.log("Produtos cadastrados: ", newProduct);
        
        setName("");
        setPrice("");   
        setQuantity("");

    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Input label="Nome: " type="text" value={name} placeholder="Nome do produto" onChange={(event) => setName(event.target.value)} />
            <Input label="Preço: " type="number" value={price} placeholder="Preço do produto" onChange={(event) => setPrice(event.target.value)} />
            <Input label="Quantidade: " type="number" value={quantity} placeholder="Quantidade do produto" onChange={(event) => setQuantity(event.target.value)} />
            <Button variant="new">Salvar</Button>

        </form>
    )
}

export default ProductRegistration;