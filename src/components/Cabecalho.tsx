import Logo from "./Logo";
import { navegacao, site } from "@/data/site";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-interno">
        <a href="#topo" className="marca" aria-label="COAPI — início">
          <Logo tamanho={38} />
          <span className="marca-textos">
            <span className="marca-nome">{site.nome}</span>
            <span className="marca-sub">{site.subtitulo}</span>
          </span>
        </a>
        <nav className="menu" aria-label="Navegação principal">
          {navegacao.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#contato" className="menu-cta">
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
