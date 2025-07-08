
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface BookCardProps {
  book: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

const BookCard = ({ book }: BookCardProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 48,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 48);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
      <div className="aspect-[3/4] mb-6 overflow-hidden rounded-xl">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
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
          
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-xs text-gray-400 mb-2">Lançamento em:</p>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-gray-700/50 rounded p-2">
                <div className="text-lg font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs text-gray-400">Dias</div>
              </div>
              <div className="bg-gray-700/50 rounded p-2">
                <div className="text-lg font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400">Horas</div>
              </div>
              <div className="bg-gray-700/50 rounded p-2">
                <div className="text-lg font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400">Min</div>
              </div>
              <div className="bg-gray-700/50 rounded p-2">
                <div className="text-lg font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400">Seg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
