import Media from "./Media";
import { hero, site } from "@/data/site";

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
        <Media
          imagem={hero.imagem}
          priority
          sizes="(max-width: 900px) 100vw, 560px"
        />
        <div className="hero-cartao">
          <span className="hero-cartao-valor">{hero.destaque.valor}</span>
          <span className="hero-cartao-label">{hero.destaque.label}</span>
        </div>
      </div>
    </section>
  );
}
