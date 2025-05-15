'use client';

import Image from 'next/image';

/**
 * Componente genérico para exibir seções de "Como cobrar com..." para diferentes tipos de maquininhas
 * @param {Object} props
 * @param {string} props.title - Título da seção (ex: "Como cobrar com a Point Mini")
 * @param {Array<{text: string}>} props.steps - Array com os passos a serem exibidos
 * @param {string} props.imageSrc - Caminho da imagem a ser exibida
 * @param {string} props.imageAlt - Texto alternativo para a imagem
 * @param {string} props.footerText - Texto opcional para o rodapé da seção
 */
const HowToChargeSection = ({
  title,
  steps,
  imageSrc,
  imageAlt = "Imagem da maquininha",
  footerText = "Você não precisa ter conta bancária para começar a vender com a Point."
}) => {
  return (
    <section>
      <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">
          {title}
        </h2>
        <div>
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">
                  {index + 1}
                </span>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
          {footerText && <p className="mt-6 text-center sm:text-left">{footerText}</p>}
        </div>
        <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
          <Image
            alt={imageAlt}
            loading="lazy"
            width={500}
            height={500}
            decoding="async"
            src={imageSrc}
            quality={75}
            sizes="(max-width: 640px) 640px, 1080px"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToChargeSection; 