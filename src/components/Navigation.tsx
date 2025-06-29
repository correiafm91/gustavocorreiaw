
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="py-6 px-4 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Gustavo Correia
        </Link>
        
        <div className="flex gap-8">
          <Link 
            to="/" 
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Início
          </Link>
          <Link 
            to="/blog" 
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
