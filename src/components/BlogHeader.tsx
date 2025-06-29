
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="py-8 px-4 border-b border-gray-800">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={20} />
          Voltar ao início
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
