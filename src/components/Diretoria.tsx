import Image from "next/image";
import { diretoria } from "@/data/site";

type Pessoa = { role: string; name: string; foto: string };

function Cartao({ pessoa }: { pessoa: Pessoa }) {
  return (
    <div className="pessoa">
      <div className="pessoa-foto">
        {pessoa.foto ? (
          <Image src={pessoa.foto} alt={pessoa.name} width={72} height={72} />
        ) : null}
      </div>
      <div>
        <div className="pessoa-cargo">{pessoa.role}</div>
        <h3>{pessoa.name}</h3>
      </div>
    </div>
  );
}

export default function Diretoria() {
  return (
    <section id="diretoria" className="diretoria">
      <div className="diretoria-interno">
        <div className="secao-numero">04 — Diretoria</div>
        <h2 className="secao-titulo">Quem conduz a cooperativa.</h2>
        <p className="diretoria-texto">{diretoria.descricao}</p>
        <div className="diretoria-grupos">
          <div>
            <div className="diretoria-grupo-titulo">Diretoria executiva</div>
            <div className="diretoria-grade">
              {diretoria.executiva.map((pessoa) => (
                <Cartao key={pessoa.role} pessoa={pessoa} />
              ))}
            </div>
          </div>
          <div>
            <div className="diretoria-grupo-titulo">Conselho fiscal</div>
            <div className="diretoria-grade">
              {diretoria.conselho.map((pessoa) => (
                <Cartao key={pessoa.name} pessoa={pessoa} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
