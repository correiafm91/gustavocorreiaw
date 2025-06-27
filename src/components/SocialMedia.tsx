
import { Instagram, Twitter } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8 text-white">
          Siga-me nas Redes Sociais
        </h3>
        
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com/gustavocorreiaw/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Instagram size={24} />
            Instagram
          </a>
          
          <a
            href="https://x.com/GustavoCorreiaw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Twitter size={24} />
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
