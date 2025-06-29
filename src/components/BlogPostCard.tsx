
import { Link } from "react-router-dom";
import { Clock, Tag } from "lucide-react";

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    category: string;
  };
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Tag size={16} />
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-medium">
              {post.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
          <span>{post.date}</span>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {post.title}
        </h2>
        
        <p className="text-gray-300 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="mt-6">
          <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
            Ler artigo completo →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
