'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Márcio Gonçalves",
    location: "São Paulo",
    image: "/images/testimonials/testimonial1.webp",
    quote: "O produto atendeu as minhas expectativas. O modo de usar é intuitivo e muito bem sinalizado. Recomendo para todos os comerciantes realizarem suas negociações. Os juros são os menores do mercado."
  },
  {
    name: "Roberto Martins",
    location: "Rio de janeiro",
    image: "/images/testimonials/testimonial2.webp",
    quote: "Excelente maquininha. Sou taxista e é uma mão na roda. Tem bateria de longa duração, é de fácil manuseio. Valeu o investimento que por sinal é baixíssimo. Recomendo a aquisição. As taxas cobradas estão na média do mercado financeiro."
  },
  {
    name: "Fernanda Teixeira",
    location: "Curitiba",
    image: "/images/testimonials/testimonial3.webp",
    quote: "Melhor impossível, correspondeu todas as minhas expectativas e aumentou as minhas vendas, além disso posso escolher quando quero ter o meu dinheiro disponível. Qualquer dúvida, posso entrar em contato que ela é esclarecida. Recomendo!"
  },
  {
    name: "Marilene Ferreira",
    location: "Salvador",
    image: "/images/testimonials/testimonial4.webp",
    quote: "Excelente! Esta maquininha torna os produtos mais acessíveis aos clientes, porque dá condição para eles comprarem. Um produto que antes era difícil, agora é possível, já que o cartão de crédito está nas mãos de todos os brasileiros."
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500); // 500ms matches the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handlePrev = () => {
    if (!isAnimating) {
      setDirection('right');
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setDirection('left');
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-primary-foreground dark:bg-primary-foreground/30">
      <div className="card container py-16">
        <div className="relative rounded-xl border bg-white p-8 shadow-xl shadow-black/5 dark:bg-accent/60 dark:shadow-black/30 sm:px-16 sm:py-12 overflow-hidden">
          <div 
            className={`testimonial-slide ${isAnimating ? `slide-${direction}` : ''}`}
          >
            <div className="flex flex-col items-center gap-8 sm:flex-row md:gap-12">
              <div className="h-36 w-36 shrink-0 md:h-[220px] md:w-[220px]">
                <Image 
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={220}
                  height={220}
                  priority={true}
                />
              </div>
              <div className="space-y-6 text-center sm:text-left">
                <blockquote className="relative">
                  <svg
                    aria-hidden="true"
                    className="absolute -top-12 z-10 w-10 text-accent sm:-left-14 sm:top-0"
                    viewBox="0 0 24 27"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                  </svg>
                  <q className="md:text-lg">{currentTestimonial.quote}</q>
                </blockquote>
                <figcaption className="md:text-lg">
                  <h2 className="font-semibold">{currentTestimonial.name}</h2>
                  <h3 className="text-muted-foreground">{currentTestimonial.location}</h3>
                </figcaption>
              </div>
            </div>
          </div>
          <button 
            type="button" 
            aria-label="previous slide" 
            className="navigation slide-prev absolute left-4 top-1/2 transform -translate-y-1/2"
            onClick={handlePrev}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </button>
          <button 
            type="button" 
            aria-label="next slide" 
            className="navigation slide-next absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={handleNext}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        .testimonial-slide {
          transition: transform 0.5s ease-in-out;
        }
        .slide-left {
          animation: slideLeft 0.5s forwards;
        }
        .slide-right {
          animation: slideRight 0.5s forwards;
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSlider;