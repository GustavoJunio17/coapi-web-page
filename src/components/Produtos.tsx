import Media from "./Media";
import { produtos } from "@/data/site";

export default function Produtos() {
  return (
    <section id="produtos" className="produtos">
      <div className="produtos-interno">
        <div className="produtos-topo">
          <div>
            <div className="secao-numero">02 — Produtos e serviços</div>
            <h2 className="secao-titulo">Tudo para a lavoura e o rebanho.</h2>
          </div>
          <a href="#contato" className="produtos-link">
            Falar com um especialista →
          </a>
        </div>
        <div className="produtos-grade">
          {produtos.map((produto) => (
            <article key={produto.title} className="produto">
              <Media
                imagem={produto.imagem}
                sizes="(max-width: 700px) 100vw, 300px"
              />
              <div className="produto-corpo">
                <h3>{produto.title}</h3>
                <p>{produto.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
