
import BlogHeader from "@/components/BlogHeader";
import BlogPostCard from "@/components/BlogPostCard";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Posicionamento: A Arte de Ocupar a Mente do Seu Cliente",
      excerpt: "Como se destacar em um mercado saturado através de um posicionamento estratégico que realmente conecta com seu público-alvo.",
      date: "29 de Junho, 2025",
      readTime: "5 min de leitura",
      slug: "posicionamento-arte-ocupar-mente-cliente",
      category: "Estratégia"
    },
    {
      id: 2,
      title: "Copywriting: As Palavras que Vendem Mais que Argumentos",
      excerpt: "Descubra como transformar palavras em vendas através de técnicas psicológicas comprovadas de copywriting.",
      date: "29 de Junho, 2025",
      readTime: "7 min de leitura",
      slug: "copywriting-palavras-vendem-mais-argumentos",
      category: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogHeader />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, estratégias e aprendizados sobre empreendedorismo, marketing e desenvolvimento pessoal.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
