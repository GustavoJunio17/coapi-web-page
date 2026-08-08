import Image from "next/image";
import type { Imagem } from "@/data/site";

type Props = {
  imagem: Imagem;
  className?: string;
  /** Dica de tamanho para o next/image em layouts responsivos. */
  sizes?: string;
  /** Carrega a imagem com prioridade (usar apenas na imagem principal do topo). */
  priority?: boolean;
};

/**
 * Mostra a foto quando `imagem.src` estiver preenchido; caso contrário,
 * exibe o placeholder listrado com a descrição da arte que falta.
 */
export default function Media({ imagem, className, sizes = "100vw", priority }: Props) {
  const classes = className ? `media ${className}` : "media";

  if (!imagem.src) {
    return (
      <div className={classes} role="img" aria-label={imagem.alt}>
        <span className="media-legenda">{imagem.legenda}</span>
      </div>
    );
  }

  return (
    <div className={classes}>
      <Image
        src={imagem.src}
        alt={imagem.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
