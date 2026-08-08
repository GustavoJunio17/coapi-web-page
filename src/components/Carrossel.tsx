"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Imagem } from "@/data/site";

type Props = {
  itens: Imagem[];
  /** Intervalo da troca automática, em milissegundos. */
  intervalo?: number;
};

/**
 * Carrossel dos anúncios da cooperativa.
 *
 * Os anúncios têm proporções diferentes (quadrado e vertical), então cada
 * imagem é exibida inteira dentro de um quadro quadrado — sem cortar texto.
 * A troca automática pausa quando o mouse está em cima, quando algum botão
 * recebe foco do teclado e quando o sistema pede menos animação.
 */
export default function Carrossel({ itens, intervalo = 6000 }: Props) {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = itens.length;
  const regiao = useRef<HTMLDivElement>(null);

  const ir = useCallback(
    (indice: number) => setAtual(((indice % total) + total) % total),
    [total],
  );

  useEffect(() => {
    if (pausado || total < 2) return;

    const menosAnimacao = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (menosAnimacao) return;

    const id = window.setInterval(() => setAtual((i) => (i + 1) % total), intervalo);
    return () => window.clearInterval(id);
  }, [pausado, total, intervalo]);

  function aoTeclar(evento: React.KeyboardEvent) {
    if (evento.key === "ArrowLeft") {
      evento.preventDefault();
      ir(atual - 1);
    } else if (evento.key === "ArrowRight") {
      evento.preventDefault();
      ir(atual + 1);
    }
  }

  if (total === 0) return null;

  return (
    <div
      className="carrossel"
      ref={regiao}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Anúncios da COAPI"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocus={() => setPausado(true)}
      onBlur={() => setPausado(false)}
      onKeyDown={aoTeclar}
    >
      <div className="carrossel-quadro">
        <div
          className="carrossel-trilho"
          style={{ transform: `translateX(-${atual * 100}%)` }}
        >
          {itens.map((item, i) => (
            <div
              className="carrossel-slide"
              key={item.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}`}
              aria-hidden={i !== atual}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 560px"
                priority={i === 0}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              className="carrossel-seta carrossel-seta-anterior"
              onClick={() => ir(atual - 1)}
              aria-label="Anúncio anterior"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              className="carrossel-seta carrossel-seta-proximo"
              onClick={() => ir(atual + 1)}
              aria-label="Próximo anúncio"
            >
              <span aria-hidden="true">›</span>
            </button>
          </>
        )}
      </div>

      {/* Os pontos ficam fora do quadro para não cobrirem a arte do anúncio. */}
      {total > 1 && (
        <div className="carrossel-pontos">
          {itens.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className={i === atual ? "carrossel-ponto ativo" : "carrossel-ponto"}
              onClick={() => ir(i)}
              aria-label={`Ir para o anúncio ${i + 1}`}
              aria-current={i === atual}
            />
          ))}
        </div>
      )}
    </div>
  );
}
