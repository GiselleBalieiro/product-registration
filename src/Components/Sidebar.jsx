import {Home, List, PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="flex">
        <h2 className="text-xl font-bold mb-6">Giselle Balieiro</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/">
                <Home size={20} /> Home
            </Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/products">
                <List size={20} /> Lista de Produtos
            </Link>
          </li>
          <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/register">
                <PackageSearch size={20} /> Registrar Produtos
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default Sidebar;
