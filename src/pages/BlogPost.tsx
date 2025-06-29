
import { useParams } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import { Clock, Tag } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  
  const posts = {
    "posicionamento-arte-ocupar-mente-cliente": {
      title: "Posicionamento: A Arte de Ocupar a Mente do Seu Cliente",
      date: "29 de Junho, 2025",
      readTime: "5 min de leitura",
      category: "Estratégia",
      content: `
        <p>No mundo dos negócios, não basta ser bom no que você faz. É preciso que as pessoas saibam exatamente <strong>por que</strong> você é a melhor escolha para elas. Essa é a essência do posicionamento estratégico.</p>

        <h2>O Que É Posicionamento de Verdade?</h2>

        <p>Posicionamento não é sobre o que você faz com seu produto. É sobre o que você faz na mente do seu cliente. É a percepção única que você cria sobre sua marca, produto ou serviço na cabeça das pessoas.</p>

        <p>Pense assim: quando alguém precisa do que você oferece, <strong>você é a primeira opção que vem à mente?</strong> Se a resposta for não, você tem um problema de posicionamento.</p>

        <h2>Os 3 Pilares de um Posicionamento Vencedor</h2>

        <h3>1. Diferenciação Clara</h3>
        <p>Não seja mais um no mercado. Encontre o que te torna único e explore isso até o limite. Se todo mondo fala sobre "qualidade", fale sobre "resultados". Se todos prometem "rapidez", prometa "precisão".</p>

        <h3>2. Relevância para o Cliente</h3>
        <p>Sua diferenciação precisa importar para quem compra. Não adianta ser único em algo que ninguém valoriza. Entenda profundamente as dores, desejos e motivações do seu público.</p>

        <h3>3. Credibilidade</h3>
        <p>De nada adianta prometer algo que você não consegue entregar. Sua diferenciação precisa ser autêntica e comprováevel. Case de sucesso, depoimentos e resultados reais são fundamentais.</p>

        <h2>Como Aplicar na Prática</h2>

        <p>Comece respondendo estas perguntas:</p>
        
        <ul>
          <li>Em que você é realmente o melhor?</li>
          <li>O que seus clientes mais valorizam em você?</li>
          <li>Como você quer ser lembrado?</li>
          <li>Qual problema você resolve melhor que qualquer concorrente?</li>
        </ul>

        <p>Lembre-se: <strong>posicionamento não é sobre ser melhor em tudo. É sobre ser insubstituível em uma coisa específica.</strong></p>

        <p>Quando você domina o posicionamento, não precisa mais competir por preço. Você compete por relevância. E relevância sempre vence.</p>
      `
    },
    "copywriting-palavras-vendem-mais-argumentos": {
      title: "Copywriting: As Palavras que Vendem Mais que Argumentos",
      date: "29 de Junho, 2025",
      readTime: "7 min de leitura",
      category: "Marketing",
      content: `
        <p>Você já parou para pensar por que algumas palavras nos fazem agir imediatamente, enquanto outras nos deixam completamente indiferentes? Essa é a magia do copywriting.</p>

        <h2>Copywriting Não É Sobre Escrever Bonito</h2>

        <p>Muita gente confunde copywriting com redação criativa ou literatura. <strong>Copywriting é psicologia aplicada através das palavras.</strong> É a arte de entender como a mente humana toma decisões e usar esse conhecimento para influenciar comportamentos.</p>

        <p>Um bom copy não impressiona pela beleza das palavras. Ele impressiona pelos resultados que gera.</p>

        <h2>Os 4 Gatilhos Mentais Mais Poderosos</h2>

        <h3>1. Escassez</h3>
        <p>O cérebro humano tem pavor de perder oportunidades. "Últimas vagas", "Por tempo limitado", "Apenas para os 50 primeiros" não são apenas frases. São comandos diretos ao subconsciente.</p>

        <h3>2. Autoridade</h3>
        <p>Confiamos em quem demonstra expertise. Use números, dados, casos de sucesso e depoimentos. "Método usado por mais de 10.000 empreendedores" carrega mais peso que "Método eficaz".</p>

        <h3>3. Prova Social</h3>
        <p>Fazemos o que outros fazem. Mostre que pessoas como seu leitor já obtiveram o resultado desejado. Testimonials específicos vendem mais que promessas genéricas.</p>

        <h3>4. Reciprocidade</h3>
        <p>Quando recebemos algo de valor, sentimos a necessidade de retribuir. Ofereça conteúdo útil antes de pedir qualquer coisa em troca.</p>

        <h2>A Fórmula AIDA que Funciona</h2>

        <p><strong>Atenção:</strong> Comece com algo que pare o scroll. Uma pergunta provocativa, uma estatística surpreendente, uma afirmação polêmica.</p>

        <p><strong>Interesse:</strong> Conecte com as dores e desejos do seu leitor. Mostre que você entende exatamente pelo que ele está passando.</p>

        <p><strong>Desejo:</strong> Pinte o futuro que ele quer alcançar. Use histórias, transformações, benefícios emocionais.</p>

        <p><strong>Ação:</strong> Diga exatamente o que ele deve fazer agora. Seja específico e urgente.</p>

        <h2>Erros Que Matam Suas Vendas</h2>

        <ul>
          <li><strong>Falar de recursos ao invés de benefícios:</strong> Ninguém compra um curso de 40 horas. Compram a transformação que essas 40 horas vão gerar.</li>
          <li><strong>Ser genérico:</strong> "Produto de qualidade" não diz nada. "Produto que reduz seu tempo de trabalho em 3 horas por dia" diz tudo.</li>
          <li><strong>Não criar urgência:</strong> Sem urgência, a decisão fica para depois. E depois raramente chega.</li>
        </ul>

        <h2>O Segredo dos Copies que Convertem</h2>

        <p>Aqui está a verdade que poucos falam: <strong>o melhor copy é aquele que não parece copy.</strong></p>

        <p>É uma conversa natural, como se você estivesse falando com um amigo que precisa da sua ajuda. É direto, honesto e focado em resolver um problema real.</p>

        <p>Pare de tentar impressionar. Comece a influenciar. As vendas virão naturalmente.</p>
      `
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-gray-400">O artigo que você procura não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <BlogHeader />
      
      <article className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
            {post.title}
          </h1>
          
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-white prose-strong:font-semibold
              prose-ul:text-gray-300 prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
