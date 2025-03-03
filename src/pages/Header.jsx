import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link to="/">Registro de Produtos</Link>
        </li>
        <li>
          <Link to="/products">Lista de Produtos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
