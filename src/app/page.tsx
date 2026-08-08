import Cabecalho from "@/components/Cabecalho";
import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import QuemSomos from "@/components/QuemSomos";
import Produtos from "@/components/Produtos";
import Unidades from "@/components/Unidades";
import Diretoria from "@/components/Diretoria";
import Contato from "@/components/Contato";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <div className="pagina">
      <Cabecalho />
      <main>
        <Hero />
        <Numeros />
        <QuemSomos />
        <Produtos />
        <Unidades />
        <Diretoria />
        <Contato />
      </main>
      <Rodape />
    </div>
  );
}
