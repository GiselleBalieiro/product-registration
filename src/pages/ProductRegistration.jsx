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
            setOption(productEdit.option);
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
        setOption("");
    };

    return (
        <div className="bg-white flex-1 min-h-screen p-10 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-[#3E2723] p-8 rounded-lg shadow-xl w-full max-w-lg">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                    {isEditing ? "Editar Produto" : "Cadastrar Produto"}
                </h2>
                <div className="flex flex-col gap-4">
                    <Input
                        label="Nome: "
                        type="text"
                        value={name}
                        placeholder="Chocolate"
                        onChange={(event) => setName(event.target.value)}
                        className="bg-white text-[#3E2723] p-3 border border-[#6D4C41] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7CCC8]"
                    />
                    <Input
                        label="Preço: "
                        type="number"
                        value={price}
                        placeholder="4.50"
                        onChange={(event) => setPrice(event.target.value)}
                        className="bg-white text-[#3E2723] p-3 border border-[#6D4C41] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7CCC8]"
                    />
                    <Input
                        label="Quantidade: "
                        className="bg-white text-[#3E2723] p-3 border border-[#6D4C41] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7CCC8]"
                        type="number"
                        value={quantity}
                        placeholder="30"
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                   <div className="flex flex-col mb-4">
                        <label className="text-white font-semibold mb-2" htmlFor="option">
                            Categoria:
                        </label>
                        <select
                            className="bg-white text-[#3E2723] p-3 border border-[#6D4C41] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7CCC8]"
                            required
                            id="option"
                            name="option"
                            value={option}
                            onChange={(event) => setOption(event.target.value)}
                        >
                            <option value="" disabled>Selecione</option>
                            <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                            <option value="Vestuário e Calçados">Vestuário e Calçados</option>
                            <option value="Eletrônicos e Eletrodomésticos">Eletrônicos e Eletrodomésticos</option>
                            <option value="Cosméticos e Perfumaria">Cosméticos e Perfumaria</option>
                            <option value="Limpeza e Higiene">Limpeza e Higiene</option>
                        </select>
                    </div>

                    <Button
                        type="submit"
                        className="bg-[#FBC02D] text-[#3E2723] font-bold p-3 rounded-md transition duration-300 hover:bg-[#E5A400] hover:text-white"
                    >
                        {isEditing ? "Editar" : "Salvar"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ProductRegistration;
