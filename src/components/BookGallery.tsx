
import BookCard from "./BookCard";

const BookGallery = () => {
  const books = [
    {
      id: 1,
      image: "https://i.postimg.cc/1tq7TkGZ/512247044-17847481935508496-4517404474951452996-n.jpg",
      title: "Livro",
      description: "Uma obra extraordinária que promete cativar leitores com sua narrativa envolvente."
    },
    {
      id: 2,
      image: "https://i.postimg.cc/0yk3QHsp/Picsart-25-06-27-14-31-49-751.jpg",
      title: "Livro", 
      description: "Uma jornada literária única que explora temas profundos da experiência humana."
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
