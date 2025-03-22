import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-[#3E2723]">
            <h1 className="text-4xl font-bold mb-6">Bem-vindo ao Sistema de Gestão</h1>
            <p className="text-lg mb-8">Gerencie seus produtos de forma simples e eficiente.</p>
            <div className="flex gap-4">
                <Link to="/register" className="bg-[#FBC02D] text-[#3E2723] px-6 py-3 rounded-md font-semibold transition duration-300 hover:bg-[#E5A400] hover:text-white">
                    Cadastrar Produto
                </Link>
                <Link to="/products" className="bg-[#FBC02D] text-[#3E2723] px-6 py-3 rounded-md font-semibold transition duration-300 hover:bg-[#E5A400] hover:text-white">
                    Ver Produtos
                </Link>
            </div>
        </div>
    );
};

export default Home;
