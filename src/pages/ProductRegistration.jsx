
import React, { useState } from "react"
import Input from "../component/Input";
import Button from "../component/Button";

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
      <div className="flex h-screen">
        <form 
            onSubmit={handleSubmit}  >
            <Input 
                label="Nome: " 
                type="text" 
                value={name} 
                placeholder="Nome do produto" 
                onChange={(event) => setName(event.target.value)} />
            <Input 
                label="Preço: " 
                type="number" 
                value={price} 
                placeholder="Preço do produto" 
                onChange={(event) => setPrice(event.target.value)} />
            <Input
                label="Quantidade: " 
                type="number" 
                value={quantity} 
                placeholder="Quantidade do produto" 
                onChange={(event) => setQuantity(event.target.value)} />
            <Button>Salvar</Button>
        </form>
      </div>
    )
}

export default ProductRegistration;