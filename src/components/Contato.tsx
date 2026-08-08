import { site } from "@/data/site";

export default function Contato() {
  const { contato } = site;

  return (
    <section id="contato" className="contato">
      <div className="contato-interno">
        <div>
          <div className="secao-numero">05 — Contato</div>
          <h2 className="secao-titulo">Venha nos visitar em Piumhi.</h2>
          <div className="contato-lista">
            <div className="contato-item">
              <div className="contato-rotulo">Telefone</div>
              <a href={contato.telefoneLink} className="contato-valor">
                {contato.telefone}
              </a>
            </div>
            <div className="contato-item">
              <div className="contato-rotulo">E-mail</div>
              <a href={`mailto:${contato.email}`} className="contato-valor">
                {contato.email}
              </a>
            </div>
            <div className="contato-item">
              <div className="contato-rotulo">Endereço</div>
              <span className="contato-valor">{contato.endereco}</span>
            </div>
          </div>
        </div>
        <div className="contato-mapa media">
          {contato.mapaEmbed ? (
            <iframe
              src={contato.mapaEmbed}
              title="Mapa com a localização da COAPI"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <span className="media-legenda">
              mapa: embed do Google Maps
              <br />
              com o endereço da loja
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
