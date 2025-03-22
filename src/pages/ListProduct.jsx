import React, { useState } from "react";
import Button from "../component/Button";
import { Link } from "react-router-dom";

const ListProduct = ({ product, setProduct, productEdit }) => {
    const [filterList, setFilterList] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleRemove = (indexHandleRemove) => {
        setProduct(product.filter((_, index) => index !== indexHandleRemove));
    };

    const productSearch = product.filter((product) =>
        product.name.toLowerCase().includes(filterList.toLowerCase())
    );

    const filterProducts = selectedCategory
        ? productSearch.filter((product) => product.option === selectedCategory)
        : productSearch;

    return (
        <div className="flex-1 min-h-screen p-10 bg-white flex justify-center items-center">
            <div className="bg-[#3E2723] p-8 rounded-lg shadow-xl w-full max-w-6xl">
                <div className="mb-6 flex flex-col md:flex-row gap-6">
                    <input
                        type="text"
                        placeholder="Busque um produto"
                        value={filterList}
                        onChange={(e) => setFilterList(e.target.value)}
                        className="bg-white text-gray-700 p-3 border border-gray-300 rounded-md w-full md:w-1/2 shadow-md"
                    />

                    <select
                        className="bg-white text-gray-700 p-3 border border-gray-300 rounded-md w-full md:w-1/2 shadow-md"
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value="">Filtrar por categoria</option>
                        <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
                        <option value="Vestuário e Calçados">Vestuário e Calçados</option>
                        <option value="Eletrônicos e Eletrodomésticos">Eletrônicos e Eletrodomésticos</option>
                        <option value="Cosméticos e Perfumaria">Cosméticos e Perfumaria</option>
                        <option value="Limpeza e Higiene">Limpeza e Higiene</option>
                    </select>
                </div>

                <div className="flex flex-col gap-6">
                    {filterProducts.length > 0 ? (
                        filterProducts.map((product, index) => (
                            <div 
                                key={index} 
                                className="bg-[#5D4037] text-[#F5E0C3] p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-4"
                            >
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold">{product.name}</h3>
                                    <p className="text-lg">💰 Preço: R${product.price}</p>
                                    <p className="text-lg">📦 Quantidade: {product.quantity} Unidades</p>
                                    <p className="text-lg">🏷️ Categoria: {product.option}</p>
                                </div>
                                <div className="flex gap-3">
                                    <Button 
                                        className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-semibold px-4 py-2 rounded-md transition duration-300"
                                        onClick={() => handleRemove(index)}
                                    >
                                        Remover
                                    </Button>
                                    <Link to="/register">
                                        <Button 
                                            className="bg-[#FFC107] hover:bg-[#FFA000] text-black font-semibold px-4 py-2 rounded-md transition duration-300"
                                            onClick={() => productEdit(product)}
                                        >
                                            Editar
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-6 text-lg text-[#F5E0C3]">
                            Nenhum produto registrado
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListProduct;
