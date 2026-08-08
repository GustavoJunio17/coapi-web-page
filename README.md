# COAPI — Cooperativa Agropecuária de Piumhi

Site institucional da COAPI, feito em [Next.js](https://nextjs.org) (App Router) com TypeScript.
Pronto para publicar na [Vercel](https://vercel.com).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # roda o build de produção
```

> As versões das dependências estão fixadas no `package.json` (sem `^`) e o
> `package-lock.json` está versionado, então o build é sempre igual.

## Como editar o conteúdo

**Tudo o que é texto, contato e lista fica em um arquivo só:** [`src/data/site.ts`](src/data/site.ts).

Lá você altera:

| O que | Onde no arquivo |
| --- | --- |
| Telefone, e-mail, endereço, CNPJ, Instagram | `site.contato` e `site` |
| Nomes da diretoria e do conselho fiscal | `diretoria.executiva` / `diretoria.conselho` |
| Cards de produtos e serviços | `produtos` |
| As 4 unidades | `unidades` |
| Missão, visão e cooperativismo | `quemSomos.pilares` |
| Números da faixa (anos, unidades…) | `stats` |

Os "anos de história" são calculados sozinhos a partir do ano de fundação (`site.fundacao`),
então não precisam ser atualizados todo ano.

## Como colocar as artes (fotos)

Enquanto uma foto não é enviada, o site mostra um **placeholder listrado** com a descrição
da imagem que falta — então dá pra publicar antes das artes ficarem prontas.

Para colocar uma foto:

1. Salve o arquivo em `public/imagens/` — por exemplo `public/imagens/loja.jpg`
2. Em `src/data/site.ts`, preencha o campo `src` da imagem correspondente:

```ts
imagem: {
  src: "/imagens/loja.jpg",        // <- antes estava ""
  alt: "Fachada da loja COAPI",
  legenda: "foto: fachada da loja COAPI",
}
```

### Carrossel de anúncios

Os anúncios que giram no topo da página ficam na lista `anuncios`, em
`src/data/site.ts`. Para trocar ou acrescentar um, salve a arte em
`public/imagens/` e edite a lista — o carrossel se ajusta sozinho à quantidade
de itens (com um item só, ele some as setas e os pontos).

As artes aparecem **inteiras, sem corte**, dentro de um quadro quadrado, então
podem ter proporções diferentes entre si. A troca é automática a cada 6s e pausa
quando o mouse está em cima ou quando algum botão está com foco do teclado.
Também dá para navegar com as setas ← → do teclado.

Sempre preencha o `alt` descrevendo o que o anúncio diz — é o que leitores de
tela anunciam e o que o Google indexa, já que o texto está dentro da imagem.

### Logo

A logo oficial está em `public/imagens/logo.png`. Como ela traz o emblema e a
palavra "COAPI" juntos, e esse texto ficaria ilegível nos 38px do cabeçalho,
o site usa `logo-emblema.png` — só o círculo, recortado da logo original — com
o "COAPI" ao lado como texto de verdade. O mesmo emblema vira o ícone da aba
do navegador (`src/app/icon.png`).

Se um dia chegar a versão vetorial (`.svg`), basta trocar o caminho em
`site.logo`. Vetor escala sem perder qualidade e é o ideal para logo.

Tamanhos recomendados:

| Imagem | Proporção | Sugestão |
| --- | --- | --- |
| Anúncios do carrossel | livre | a partir de 1000px de largura |
| Quem somos | 5:4 | 1250×1000 |
| Cards de produtos | 4:3 | 1200×900 |
| Unidades | 16:9 | 1600×900 |
| Retratos da diretoria | 1:1 quadrado | 400×400 |

Para os retratos da diretoria, o campo é `foto` (ex.: `foto: "/imagens/presidente.jpg"`).

## Mapa do Google Maps

Em `src/data/site.ts`, no campo `site.contato.mapaEmbed`, cole a URL do
**Compartilhar → Incorporar um mapa** do Google Maps (só a URL que fica dentro de `src="..."`).
Enquanto estiver vazio, aparece o placeholder no lugar do mapa.

## Publicando na Vercel

1. Entre em https://vercel.com e conecte a conta do GitHub
2. **Add New → Project** e escolha este repositório
3. A Vercel detecta o Next.js sozinho — é só clicar em **Deploy**

Não há variáveis de ambiente para configurar.

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx      fontes, metadados e SEO
│  ├─ page.tsx        monta as seções na ordem
│  ├─ globals.css     todo o estilo do site
│  └─ icon.svg        favicon
├─ components/        uma seção por arquivo
│  ├─ Cabecalho.tsx   menu fixo do topo
│  ├─ Hero.tsx        chamada principal
│  ├─ Carrossel.tsx   carrossel dos anúncios
│  ├─ Logo.tsx        emblema da cooperativa
│  ├─ Numeros.tsx     faixa de números
│  ├─ QuemSomos.tsx   missão, visão, cooperativismo
│  ├─ Produtos.tsx    cards de produtos e serviços
│  ├─ Unidades.tsx    as 4 unidades
│  ├─ Diretoria.tsx   diretoria e conselho fiscal
│  ├─ Contato.tsx     contatos e mapa
│  ├─ Rodape.tsx      rodapé
│  └─ Media.tsx       mostra a foto ou o placeholder
└─ data/
   └─ site.ts         ⭐ todo o conteúdo do site
```

## Cores e tipografia

As cores ficam como variáveis CSS no topo de `src/app/globals.css` (`:root`) — mudando
`--verde` você troca a cor de destaque do site inteiro.

- **Verde principal:** `#1F5C3A`
- **Verde escuro (seções e rodapé):** `#0F2A1E`
- **Títulos:** Outfit · **Texto:** Manrope · **Detalhes:** IBM Plex Mono
