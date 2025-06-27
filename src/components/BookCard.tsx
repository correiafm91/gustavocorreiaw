
import { Button } from "@/components/ui/button";

interface BookCardProps {
  book: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
      <div className="aspect-[3/4] mb-6 overflow-hidden rounded-xl">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">
          {book.title}
        </h3>
        
        <div className="text-gray-300 mb-8 leading-relaxed text-left whitespace-pre-line text-sm">
          {book.description}
        </div>
        
        <div className="space-y-4">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            disabled
          >
            Adquirir
          </Button>
          
          <p className="text-sm text-gray-400 italic">
            Disponível em breve nas lojas da Amazon e Google Play Livros
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
