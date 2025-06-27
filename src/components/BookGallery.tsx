
import BookCard from "./BookCard";

const BookGallery = () => {
  const books = [
    {
      id: 1,
      image: "https://i.postimg.cc/1tq7TkGZ/512247044-17847481935508496-4517404474951452996-n.jpg",
      title: "Bordel",
      description: "Ele acreditou que o certo era o caminho.\nMas o certo não pagou as contas. Nem salvou sua loja. Nem impediu a queda.\n\nDean Harrow, um comerciante honesto da França nos anos 60, viu sua pequena loja de bebidas definhar dia após dia esmagada por impostos, concorrência desleal e promessas vazias do sistema. Quando tudo ruiu, restou apenas o vazio, algumas garrafas esquecidas e um depósito grande demais para sua solidão.\n\nMas dentro daquele depósito… nasceu a ideia. Um sussurro na mente de um homem quebrado.\n\nSe o mundo só respeita quem joga sujo, ele aprenderia a sujar as mãos.\n\nCom o que restava da falência, Dean comprou silêncio, sombras e segredos. Transformou o velho depósito em algo que ninguém ousava imaginar: uma boate ilegal, um bordel escondido, um novo império onde tudo que é proibido vale ouro. Mulheres que a sociedade descartou agora dançam sob luzes vermelhas, protegidas por um homem que desistiu de ser mocinho… para se tornar dono da noite.\n\nDe vendedor de uísque… a rei do pecado."
    },
    {
      id: 2,
      image: "https://i.postimg.cc/0yk3QHsp/Picsart-25-06-27-14-31-49-751.jpg",
      title: "Amor sincero que há dentro de você", 
      description: "Londres, anos 70. Em meio à fumaça dos ônibus vermelhos e ao som abafado dos passos apressados nas calçadas úmidas, vive Philips, um executivo de sucesso em uma renomada agência de publicidade. Brilhante nos negócios, mas falho nos afetos, ele leva uma vida solitária, envolto em luxo e silêncio um homem que nunca soube amar nem ser amado.\n\nNuma tarde cinzenta, ao deixar o prédio onde trabalha, seu motorista o aguarda em frente a uma cafeteria modesta. Prestes a entrar no carro, Philips é capturado por uma imagem simples e avassaladora: uma mulher sentada junto à janela, tomando café. Ela sorri levemente para alguém lá dentro e nesse instante, algo em Philips se desfaz.\n\nSeu nome é Tracey. Independente, serena, de origem humilde, ela aprendeu desde cedo a valorizar o que não pode ser comprado: respeito, bondade, simplicidade. Tracey não se impressiona com ternos caros nem com palavras ensaiadas. Ela busca almas sinceras, corações que saibam ouvir e sentir.\n\nPhilips, encantado, tenta se aproximar. Mas percebe que, para conquistá-la, precisará ir além dos gestos grandiosos ele terá que provar que, por trás do executivo de terno impecável, existe um homem de verdade. Um homem humilde, disposto a amar com o coração e não com os bens.\n\nAssim começa sua jornada não apenas pelo amor, mas por si mesmo."
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
