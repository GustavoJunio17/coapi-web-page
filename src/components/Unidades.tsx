import Media from "./Media";
import { unidades } from "@/data/site";

export default function Unidades() {
  return (
    <section id="unidades" className="unidades">
      <div className="secao-numero">03 — Unidades</div>
      <h2 className="secao-titulo">Estrutura própria para produzir e armazenar.</h2>
      <div className="unidades-lista">
        {unidades.map((unidade) => (
          <a key={unidade.num} href="#contato" className="unidade">
            <div>
              <span className="unidade-num">{unidade.num}</span>
              <h3>{unidade.title}</h3>
              <p>{unidade.text}</p>
            </div>
            <Media
              imagem={unidade.imagem}
              sizes="(max-width: 700px) 100vw, 560px"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
