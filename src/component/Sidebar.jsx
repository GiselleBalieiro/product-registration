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
      title: "Produtos",
      url: "/products",
      icon: List,
    },
    {
      title: "Cadastrar",
      url: "/register",
      icon: PackageSearch,
    },
  ]

  return (
    <div className="w-64 h-screen bg-[#3E2723] text-white p-6 flex flex-col justify-center gap-4">
      <div className="flex flex-col gap-4 w-full">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.url}
            className="flex items-center gap-3 p-3 hover:bg-[#5D4037] rounded-lg transition-colors w-full"
          >
            <item.icon size={20} />
            <span className="text-lg font-medium">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;