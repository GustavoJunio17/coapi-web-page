/**
 * Conteúdo do site da COAPI.
 *
 * Este é o único arquivo que precisa ser editado para atualizar textos,
 * contatos, nomes da diretoria e as imagens da página.
 *
 * COMO COLOCAR AS ARTES:
 * 1. Salve a imagem em `public/imagens/` (ex.: public/imagens/loja.jpg)
 * 2. Preencha o campo `src` correspondente com "/imagens/loja.jpg"
 * Enquanto `src` estiver vazio, aparece um placeholder listrado com a
 * descrição da foto e o tamanho recomendado.
 */

export type Imagem = {
  /** Caminho a partir de /public, ex.: "/imagens/loja.jpg". Vazio = placeholder. */
  src: string;
  /** Texto alternativo (acessibilidade). */
  alt: string;
  /** Descrição mostrada no placeholder enquanto a arte não chega. */
  legenda: string;
};

export const site = {
  nome: "COAPI",
  /**
   * Logo oficial da cooperativa.
   * Usamos só o emblema (o círculo), recortado de `logo.png`, porque o
   * "COAPI" da logo ficaria ilegível nos 38px do cabeçalho — ali ele
   * aparece como texto de verdade ao lado do selo.
   * A logo completa continua em `/imagens/logo.png`.
   */
  logo: "/imagens/logo-emblema.png",
  nomeCompleto: "Cooperativa Agropecuária de Piumhi Ltda.",
  subtitulo: "Cooperativa Agropecuária",
  descricao:
    "Pioneira em produtos agropecuários e veterinários em Piumhi. Loja completa para a lavoura e o rebanho, fábrica de rações, fábrica de minerais e silos de armazenamento.",
  fundacao: 1972,
  cnpj: "00.000.000/0001-00",
  instagram: "https://www.instagram.com/coapi_piumhi/",
  contato: {
    telefone: "37 3371-1319",
    telefoneLink: "tel:+553733711319",
    email: "contato@coapi.com.br",
    endereco: "Piumhi — Minas Gerais",
    /** Cole aqui a URL de "Incorporar um mapa" do Google Maps para exibir o mapa real. */
    mapaEmbed: "",
  },
};

/** Anos de história, calculado automaticamente a partir do ano de fundação. */
export const anosDeHistoria = new Date().getFullYear() - site.fundacao;

export const navegacao = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#diretoria", label: "Diretoria" },
  { href: "#produtos", label: "Produtos" },
  { href: "#unidades", label: "Unidades" },
];

export const hero = {
  selo: `Desde ${site.fundacao} · ${anosDeHistoria} anos`,
  tituloInicio: "Ao lado do produtor rural,",
  tituloDestaque: "geração após geração.",
};

/**
 * Anúncios que giram no carrossel do topo.
 * Para adicionar um novo, salve a arte em `public/imagens/` e acrescente
 * um item nesta lista — o carrossel se ajusta sozinho à quantidade.
 * As artes aparecem inteiras (sem corte), então podem ter proporções diferentes.
 */
export const anuncios: Imagem[] = [
  {
    src: "/imagens/anuncio-1.png",
    alt: "Grande variedade de chapéus na COAPI — Panamá, Country, Palha e outros modelos. Ligue 3371-1319 ou visite a Rua Nossa Senhora do Livramento 115, Centro",
    legenda: "anúncio: chapéus",
  },
  {
    src: "/imagens/anuncio-2.png",
    alt: "Consultoria no pé da Serra da Canastra, em parceria entre Rações COAPI e Raça da Cidade",
    legenda: "anúncio: consultoria Serra da Canastra",
  },
  {
    src: "/imagens/anuncio-3.png",
    alt: "Rações COAPI — potência máxima para seu rebanho",
    legenda: "anúncio: rações",
  },
];

export const stats = [
  { value: String(anosDeHistoria), label: "anos de história" },
  { value: String(site.fundacao), label: "ano de fundação" },
  { value: "4", label: "unidades" },
  { value: "100%", label: "foco no cooperado" },
];

export const quemSomos = {
  titulo: "Uma tradição de qualidade, respeito e responsabilidade.",
  texto: `Fundada há ${anosDeHistoria} anos, a COAPI sempre trabalhou apoiando o produtor rural. Nossa loja está de portas abertas, com uma excelente linha de produtos para sua lavoura e seu rebanho e profissionais treinados para melhor atendê-lo.`,
  imagem: {
    src: "/imagens/loja.png",
    alt: "Fachada da loja da COAPI, na Rua Nossa Senhora do Livramento, em Piumhi",
    legenda: "foto: fachada da loja COAPI (horizontal, 1250×1000)",
  } as Imagem,
  pilares: [
    {
      titulo: "Missão",
      texto:
        "Manter o cliente satisfeito buscando inovações no mercado, no atendimento e em toda a estrutura da cooperativa.",
    },
    {
      titulo: "Visão",
      texto:
        "Construir estratégias avaliando o futuro dos objetivos da cooperativa, atenta a um mercado cada vez mais competitivo.",
    },
    {
      titulo: "Cooperativismo",
      texto:
        "Doutrina cultural e socioeconômica que consagra os princípios de liberdade humana, apoiada por educação e participação permanente — fazendo das cooperativas a base da produção e da distribuição de riquezas.",
    },
  ],
};

export const produtos = [
  {
    title: "Loja agropecuária",
    text: "Linha completa de produtos para a lavoura e o rebanho, com atendimento técnico.",
    imagem: { src: "", alt: "Interior da loja COAPI", legenda: "foto: interior da loja" } as Imagem,
  },
  {
    title: "Nutrição animal",
    text: "Rações e suplementos minerais produzidos pela própria cooperativa.",
    imagem: {
      src: "/imagens/fabrica-interior.jpg",
      alt: "Sacaria de ração armazenada na fábrica da COAPI",
      legenda: "foto: sacaria de ração",
    } as Imagem,
  },
  {
    title: "Produtos veterinários",
    text: "Medicamentos e insumos veterinários das principais marcas do mercado.",
    imagem: { src: "", alt: "Prateleira de produtos veterinários", legenda: "foto: prateleira veterinária" } as Imagem,
  },
  {
    title: "Armazenagem de milho",
    text: "Silos para armazenamento da safra dos nossos associados.",
    imagem: {
      src: "/imagens/silos.jpg",
      alt: "Silos de armazenamento da COAPI",
      legenda: "foto: silos",
    } as Imagem,
  },
];

export const unidades = [
  {
    num: "U/01",
    title: "Loja Veterinária",
    text: "Linha completa de medicamentos, insumos veterinários e produtos para a lavoura, com atendimento técnico.",
    imagem: {
      src: "/imagens/loja.png",
      alt: "Fachada da loja veterinária da COAPI",
      legenda: "foto: loja veterinária",
    } as Imagem,
  },
  {
    num: "U/02",
    title: "Fábrica de Rações",
    text: "Produção moderna de rações balanceadas, formuladas para o rebanho da região.",
    imagem: {
      src: "/imagens/fabrica-racoes.jpg",
      alt: "Fábrica de rações da COAPI, com os silos ao fundo",
      legenda: "foto: fábrica de rações",
    } as Imagem,
  },
  {
    num: "U/03",
    title: "Fábrica de Minerais",
    text: "Suplementação mineral desenvolvida com acompanhamento técnico.",
    imagem: {
      src: "",
      alt: "Fábrica de minerais da COAPI",
      legenda: "foto: fábrica de minerais (horizontal, 1600×900)",
    } as Imagem,
  },
  {
    num: "U/04",
    title: "Silos",
    text: "Estrutura de armazenamento de milho à disposição dos cooperados.",
    imagem: {
      src: "/imagens/silos.jpg",
      alt: "Silos de armazenamento de milho da COAPI",
      legenda: "foto: silos",
    } as Imagem,
  },
];

export const diretoria = {
  descricao:
    "Eleitos pelos cooperados, a diretoria e o conselho fiscal respondem pela gestão da COAPI e pelas decisões estratégicas da cooperativa.",
  executiva: [
    { role: "Presidente", name: "Nome do Presidente", foto: "" },
    { role: "Vice-presidente", name: "Nome do Vice-presidente", foto: "" },
    { role: "Diretor Secretário", name: "Nome do Secretário", foto: "" },
  ],
  conselho: [
    { role: "Conselheiro Fiscal", name: "Nome do Conselheiro 1", foto: "" },
    { role: "Conselheiro Fiscal", name: "Nome do Conselheiro 2", foto: "" },
    { role: "Conselheiro Fiscal", name: "Nome do Conselheiro 3", foto: "" },
  ],
};
