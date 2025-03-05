import React, { useState, useEffect } from "react";
import Input from "../component/Input";
import Button from "../component/Button";

const ProductRegistration = ({ product, setProduct, productEdit, setProductEdit }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [option, setOption] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (productEdit) {
            setName(productEdit.name);
            setPrice(productEdit.price);
            setQuantity(productEdit.quantity);
            setOption(productEdit.option)
            setIsEditing(true);
        }

    }, [productEdit]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = { name, price, quantity, option };

        if (isEditing) {
            const updatedProducts = product.map((product) =>
                product === productEdit ? newProduct : product
            );
            setProduct(updatedProducts);
            setIsEditing(false);
            setProductEdit(null);

        } else {
            setProduct([...product, newProduct]);
        }
        
        setName("");
        setPrice("");
        setQuantity("");
        setOption("")
    };

    return (
        <div className="flex h-screen">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Nome: "
                    type="text"
                    value={name}
                    placeholder="Chocolate"
                    onChange={(event) => setName(event.target.value)}
                />
                <Input
                    label="Preço: "
                    type="number"
                    value={price}
                    placeholder="4.50"
                    onChange={(event) => setPrice(event.target.value)}
                />
                <Input
                    label="Quantidade: "
                    type="number"
                    value={quantity}
                    placeholder="30"
                    onChange={(event) => setQuantity(event.target.value)}
                />
                <select className="" required
                    id="option"
                    name="option"
                    value={option}
                    onChange={(event) => setOption(event.target.value)}>
                    <option value="" disabled >Selecione</option>
                    <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                    <option value="Vestuário e Calçados">Vestuário e Calçados</option>
                    <option value="Eletrônicos e Eletrodomésticos">Eletrônicos e Eletrodomésticos</option>
                    <option value="Cosméticos e Perfumaria">Cosméticos e Perfumaria</option>
                    <option value="Limpeza e Higiene">Limpeza e Higiene</option>
                </select>
                <Button type="submit">{isEditing ? "Editar" : "Salvar"}</Button>
            </form>
        </div>
    );
};

export default ProductRegistration;