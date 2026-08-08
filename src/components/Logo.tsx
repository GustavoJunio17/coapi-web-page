import Image from "next/image";
import { site } from "@/data/site";

type Props = {
  /** Tamanho do selo em pixels. */
  tamanho?: number;
  /** No rodapé (fundo verde escuro) a logo ganha um fundo branco para contrastar. */
  variante?: "claro" | "escuro";
};

/**
 * Mostra a logo oficial quando `site.logo` estiver preenchido;
 * caso contrário, exibe o selo redondo com a letra "C".
 */
export default function Logo({ tamanho = 38, variante = "claro" }: Props) {
  if (site.logo) {
    return (
      <span
        className={`logo logo-${variante}`}
        style={{ width: tamanho, height: tamanho }}
      >
        <Image
          src={site.logo}
          alt={`Logo da ${site.nome}`}
          width={tamanho}
          height={tamanho}
        />
      </span>
    );
  }

  return (
    <span
      className={variante === "escuro" ? "rodape-selo" : "marca-selo"}
      aria-hidden="true"
    >
      C
    </span>
  );
}
