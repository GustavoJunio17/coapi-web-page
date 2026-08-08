import { anosDeHistoria, site, unidades } from "@/data/site";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer className="rodape">
      <div className="rodape-interno">
        <div>
          <div className="rodape-marca">
            <span className="rodape-selo" aria-hidden="true">
              C
            </span>
            <span className="rodape-nome">{site.nome}</span>
          </div>
          <p className="rodape-sobre">
            {site.nomeCompleto} Ao lado do produtor rural desde {site.fundacao} —{" "}
            {anosDeHistoria} anos de história.
          </p>
        </div>
        <nav className="rodape-coluna" aria-label="Institucional">
          <span className="rodape-titulo">Institucional</span>
          <a href="#quem-somos">Quem somos</a>
          <a href="#diretoria">Diretoria</a>
          <a href="#contato">Contato</a>
        </nav>
        <nav className="rodape-coluna" aria-label="Unidades">
          <span className="rodape-titulo">Unidades</span>
          {unidades.map((unidade) => (
            <a key={unidade.num} href="#unidades">
              {unidade.title}
            </a>
          ))}
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </nav>
      </div>
      <div className="rodape-base">
        <span>
          © {ano} {site.nome} · Todos os direitos reservados
        </span>
        <span>CNPJ {site.cnpj}</span>
      </div>
    </footer>
  );
}
