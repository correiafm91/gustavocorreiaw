
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookGallery from "@/components/BookGallery";
import SocialMedia from "@/components/SocialMedia";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <BookGallery />
      <SocialMedia />
    </div>
  );
};

export default Index;
