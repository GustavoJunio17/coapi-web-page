import Carrossel from "./Carrossel";
import { anuncios, hero, site } from "@/data/site";

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div>
        <div className="hero-selo">
          <span className="hero-selo-ponto" aria-hidden="true" />
          {hero.selo}
        </div>
        <h1 className="hero-titulo">
          {hero.tituloInicio} <em>{hero.tituloDestaque}</em>
        </h1>
        <p className="hero-texto">{site.descricao}</p>
        <div className="hero-acoes">
          <a href="#produtos" className="botao botao-primario">
            Ver produtos e serviços
          </a>
          <a href="#contato" className="botao botao-secundario">
            Falar com a cooperativa
          </a>
        </div>
      </div>
      <div className="hero-figura">
        <Carrossel itens={anuncios} />
      </div>
    </section>
  );
}
