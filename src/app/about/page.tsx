// import NavBar from "@/components/NavBar"
import { CardDois } from "@/components/CardDois"

type CardData = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

const cardsData: CardData[] = [
  {
    title: "Sirius",
    category: "Estrela",
    description: "É a estrela mais brilhante no céu noturno, localizada na constelação de Cão Maior",
    imageUrl: "sirius.jpg",
  },
  {
    title: "Procyon",
    category: "Estrela",
    description: "É a estrela mais brilhante da constelação de Cão Menor e a nona estrela mais brilhante visível a olho nu a partir da Terra",
    imageUrl: "procyon.jpg",
  },
  {
    title: "Betelgeuse",
    category: "Estrela",
    description: "É uma estrela supergigante vermelha na constelação de Órion, famosa por ser uma das maiores estrelas visíveis a olho nu",
    imageUrl: "betelgeuse.jpg",
  },
  {
    title: "Urano",
    category: "Planeta",
    description: "É o sétimo planeta a partir do Sol e o terceiro maior do Sistema Solar",
    imageUrl: "urano.jpg",
  },
  {
    title: "Netuno",
    category: "Planeta",
    description: "É o oitavo e mais distante planeta do Sistema Solar, conhecido por sua intensa cor azul, ventos fortes e tamanho",
    imageUrl: "netuno.jpg",
  },
  {
    title: "Saturno",
    category: "Planeta",
    description: "sexto planeta a partir do Sol e o segundo maior do Sistema Solar, conhecido por seu sistema de anéis distintos.",
    imageUrl: "saturno.jpg",
  },
];

export default function About() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center"> Sobre o Universo </h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto">
        Informações de incríveis corpos celestes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <CardDois
            key={index}
            title={card.title}
            category={card.category}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
