import React from "react";
import { Home, List, PackageSearch} from "lucide-react"
import { Link } from "react-router-dom";

const Sidebar = () => {
  
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Lista de Produtos",
      url: "/products",
      icon: List,
    },
    {
      title: "Registrar Produtos",
      url: "/register",
      icon: PackageSearch,
    },
  ]

  return (
    <div>
       {items.map((item) => (
            <Link
              key={item.title}
              to={item.url}
              className="flex items-center gap-2 p-6 hover:bg-[#5D4037] rounded-md"
            >
              <item.icon size={20} />
              <span>{item.title}</span>
            </Link>
          ))}
    </div>
  )
}

export default Sidebar;