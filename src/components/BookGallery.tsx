
import BookCard from "./BookCard";

const BookGallery = () => {
  const books = [
    {
      id: 1,
      image: "https://i.postimg.cc/BZwZqWzh/Chat-GPT-Image-8-07-2025-06-09-21.png",
      title: "Código 69", 
      description: "Phil e Eddie são parceiros de farda há anos, inseparáveis na delegacia e ainda mais quando estão de folga. Quando os tão aguardados dois dias de descanso finalmente chegam, tudo o que eles querem é relaxar, curtir e esquecer o caos das ruas. Mas o que começa como uma noite divertida se transforma em um desastre inesquecível.\n\nSeduzidos por duas mulheres misteriosas, Phil e Eddie caem em uma armadilha inesperada: algemados, nus e presos dentro da própria viatura, enquanto suas \"acompanhantes\" fogem a pé levando todos os seus pertences, armas, celulares e documentos, deixando-os vulneráveis e isolados.\n\nSem nada, com o orgulho ferido e o tempo contra eles, a dupla faz de tudo para recuperar seus bens, escapar da situação e limpar o nome antes que o escândalo se espalhe. Uma comédia policial recheada de reviravoltas, humor ácido e situações tão absurdas quanto reais, onde nem sempre a lei está do lado certo da arma."
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
