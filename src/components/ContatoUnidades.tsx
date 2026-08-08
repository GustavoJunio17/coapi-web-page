"use client";

import { useRef, useState } from "react";
import { linkTelefone, site, unidadesContato } from "@/data/site";

/**
 * Seletor de unidades da seção de contato: cada aba mostra o telefone,
 * o e-mail, o endereço e o mapa daquela unidade.
 *
 * Campo vazio não é exibido. Se a unidade ainda não tem contato próprio,
 * cai no contato principal da cooperativa em vez de deixar o painel vazio.
 */
export default function ContatoUnidades() {
  const [atual, setAtual] = useState(0);
  const abas = useRef<(HTMLButtonElement | null)[]>([]);
  const unidade = unidadesContato[atual];
  const total = unidadesContato.length;

  const temContatoProprio = Boolean(
    unidade.telefone || unidade.email || unidade.endereco,
  );
  const telefone = unidade.telefone || site.contato.telefone;
  const email = unidade.email || site.contato.email;
  const endereco = unidade.endereco || site.contato.endereco;

  /** Setas do teclado navegam entre as abas, como manda o padrão de tablist. */
  function aoTeclar(evento: React.KeyboardEvent) {
    const teclas: Record<string, number> = {
      ArrowLeft: atual - 1,
      ArrowRight: atual + 1,
      Home: 0,
      End: total - 1,
    };
    const destino = teclas[evento.key];
    if (destino === undefined) return;

    evento.preventDefault();
    const i = ((destino % total) + total) % total;
    setAtual(i);
    abas.current[i]?.focus();
  }

  return (
    <div className="contato-seletor">
      <div
        className="contato-abas"
        role="tablist"
        aria-label="Unidades da COAPI"
        onKeyDown={aoTeclar}
      >
        {unidadesContato.map((u, i) => (
          <button
            key={u.id}
            type="button"
            role="tab"
            id={`aba-${u.id}`}
            aria-selected={i === atual}
            aria-controls={`painel-${u.id}`}
            tabIndex={i === atual ? 0 : -1}
            ref={(el) => {
              abas.current[i] = el;
            }}
            className={i === atual ? "contato-aba ativa" : "contato-aba"}
            onClick={() => setAtual(i)}
          >
            {u.nome}
          </button>
        ))}
      </div>

      <div
        className="contato-painel"
        role="tabpanel"
        id={`painel-${unidade.id}`}
        aria-labelledby={`aba-${unidade.id}`}
      >
        <div>
          <div className="contato-lista">
            {telefone && (
              <div className="contato-item">
                <div className="contato-rotulo">Telefone</div>
                <a href={linkTelefone(telefone)} className="contato-valor">
                  {telefone}
                </a>
              </div>
            )}
            {email && (
              <div className="contato-item">
                <div className="contato-rotulo">E-mail</div>
                <a href={`mailto:${email}`} className="contato-valor">
                  {email}
                </a>
              </div>
            )}
            {endereco && (
              <div className="contato-item">
                <div className="contato-rotulo">Endereço</div>
                <span className="contato-valor">{endereco}</span>
              </div>
            )}
          </div>

          {!temContatoProprio && (
            <p className="contato-aviso">
              Atendimento pelo contato principal da cooperativa.
            </p>
          )}
        </div>

        <div className="contato-mapa media">
          {unidade.mapaEmbed ? (
            <iframe
              key={unidade.id}
              src={unidade.mapaEmbed}
              title={`Mapa da unidade ${unidade.nome}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <span className="media-legenda">
              mapa: embed do Google Maps
              <br />
              {unidade.nome.toLowerCase()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
