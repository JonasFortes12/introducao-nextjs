"use client";

import AtvCard from "@/components/CartAtv";
import Counter from "@/components/Counter";
import MiniDisplay from "@/components/MiniDisplay";

const CardData = [
  {
    url: "https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg",
    title: "Lindo Coqueiro",
    description:
      "O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!",
    categoria: "Filme",
  },
  {
    url: "https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg",
    title: "Lindo Coqueiro",
    description:
      "O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!",
    categoria: "Serie",
  },
  {
    url: "https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg",
    title: "Lindo Coqueiro",
    description:
      "O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!",
    categoria: "Filme",
  },
  {
    url: "https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg",
    title: "Lindo Coqueiro",
    description:
      "O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!",
    categoria: "Serie",
  },
  {
    url: "https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg",
    title: "Lindo Coqueiro",
    description:
      "O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!",
    categoria: "Livro",
  },
  {
    url: "https://botanicaipe.com.br/wp-content/uploads/2022/11/coqueiro-gigante-com-folhas-balancando-ao-vento.jpg",
    title: "Lindo Coqueiro",
    description:
      "O coqueiro mais lindo e mais verde que você vai ver em toda sua vida. Este possui a melhor água de coco do mundo!",
    categoria: "Livro",
  },
];

export default function About() {
  return (
    <div>
      {/* <div className="flex flex-row justify-center gap-8 flex-wrap my-20">
                {CardData.map((card, index) => (
                    <AtvCard 
                    key={index}
                    url={card.url}
                    title={card.title}
                    description={card.description}
                    categoria={card.categoria}
                    />
                ))}

            </div>
      <div className="flex flex-col justify-center my-[80px]">
        <Counter ititial={0} />
      </div> */}
      <MiniDisplay/>
    </div>
  );
}
