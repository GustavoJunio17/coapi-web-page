import ContatoUnidades from "./ContatoUnidades";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="contato-interno">
        <div>
          <div className="secao-numero">05 — Contato</div>
          <h2 className="secao-titulo">Venha nos visitar em Piumhi.</h2>
        </div>
        <ContatoUnidades />
      </div>
    </section>
  );
}
