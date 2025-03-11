import React, { useState } from "react"
import Button from "../component/Button";
import { Link } from "react-router-dom";

const ListProduct = ({ product, setProduct, productEdit, option, setOption}) => {
    const [filterList, setFilterList] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("")

    const handleRemove = (indexHandleRemove) => {
        setProduct(product.filter((_,index) => index !== indexHandleRemove))
    }
    
    const productSearch = product.filter((product) => {
        return product.name.toLowerCase().includes(filterList.toLowerCase())
    })

    const filterProducts = selectedCategory 
        ? productSearch.filter((product) => product.option === selectedCategory)
        : productSearch;

    return (
        <>
        <div>
        <input 
            type="text"
            placeholder="Busque um produto"
            value={filterList}  
            onChange={(e) => setFilterList(e.target.value)}>
        </input>

        <select className="" required
            id="option"
            name="option"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}>
            <option value="">Selecione</option>
            <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
            <option value="Vestuário e Calçados">Vestuário e Calçados</option>
            <option value="Eletrônicos e Eletrodomésticos">Eletrônicos e Eletrodomésticos</option>
            <option value="Cosméticos e Perfumaria">Cosméticos e Perfumaria</option>
            <option value="Limpeza e Higiene">Limpeza e Higiene</option>
        </select>

        </div>
        
        <ul>
            {filterProducts.length > 0 ? (filterProducts.map((product, index) => (
                <li key={index}>
                    <p>Nome: {product.name}</p>
                    <p>Preço: R${product.price}</p>
                    <p>Quantidade: {product.quantity} Unidades</p>
                    <p>Categoria: {product.option}</p>
                    <Button
                        onClick={() => handleRemove(index)}>Remover</Button>
                    <Link to="/register">
                        <Button
                            onClick={() => productEdit(product)}>
                                Editar
                        </Button>
                    </Link>
                </li>
            )))
            : (
                filterProducts && <li>Nenhum produto registrado</li>
            )}
        </ul>
        </>
    )
}

export default ListProduct;