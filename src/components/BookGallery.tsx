
import BookCard from "./BookCard";

const BookGallery = () => {
  const books = [
    {
      id: 1,
      image: "https://i.postimg.cc/Hk2BTNVn/Captura-de-tela-2025-06-29-204137.png",
      title: "Autodidata: Seja um engenheiro sem ter um diploma", 
      description: "Autodidata: Seja um engenheiro sem ter um diploma é um guia direto, inspirador e prático para quem deseja aprender sozinho, dominar habilidades técnicas e conquistar espaço profissional fora dos caminhos tradicionais da educação formal.\n\nEscrito por Gustavo Correia, escritor, mentor e autodidata que saiu de 450 pontos no Enem para transformar sua própria trajetória, o livro é inspirado em histórias reais de pessoas que desafiaram o sistema e provaram que o conhecimento não precisa de permissão.\n\nCom uma linguagem acessível e estratégica, Gustavo compartilha métodos eficazes de aprendizagem, técnicas de foco e produtividade, além da mentalidade resiliente e criativa necessária para construir autoridade, conquistar clientes e realizar projetos de alto nível, mesmo sem diploma."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Livros Disponíveis
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookGallery;
