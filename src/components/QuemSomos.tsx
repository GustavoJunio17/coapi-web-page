import Media from "./Media";
import { quemSomos } from "@/data/site";

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="quem-somos">
      <div className="quem-somos-coluna">
        <div className="secao-numero">01 — Quem somos</div>
        <h2 className="secao-titulo">{quemSomos.titulo}</h2>
        <Media
          imagem={quemSomos.imagem}
          sizes="(max-width: 900px) 100vw, 540px"
        />
      </div>
      <div className="quem-somos-conteudo">
        <p className="quem-somos-texto">{quemSomos.texto}</p>
        <div className="pilares">
          {quemSomos.pilares.map((pilar) => (
            <div key={pilar.titulo} className="pilar">
              <h3>{pilar.titulo}</h3>
              <p>{pilar.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
