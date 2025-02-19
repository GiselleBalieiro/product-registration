
import React, { useState } from "react"
import Input from "../Components/Input";
import Button from "../Components/Button";

const ProductRegistration = () => {
    const [name, setName] = useState("");
    const [price, setPrice ] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleClick = (event) =>{
        event.preventDefault();
        console.log("Produto cadastrado com sucesso!", name, price, quantity);
    }

    return (
        <form>
            <Input label="Nome: " type="text" placeholder="Nome do produto" onChange={(event) => setName(event.target.value)} />
            <Input label="Preço: " type="number" placeholder="Preço do produto" onChange={(event) => setPrice(event.target.value)} />
            <Input label="Quantidade: " type="number" placeholder="Quantidade do produto" onChange={(event) => setQuantity(event.target.value)} />
            <Button onClick={handleClick}>Salvar</Button>
        </form>
    )
}

export default ProductRegistration;