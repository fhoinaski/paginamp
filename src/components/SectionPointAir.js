import Image from 'next/image';

const SectionPointAir = () => {
    return (
        <section >
            <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
                <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Como cobrar com a Point Air</h2>
                <div><ol className="space-y-6"><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">1</span><span>Ligue a maquininha e a conecte à internet. Você não precisa do celular para usar a maquininha.</span></li><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">2</span><span>Digite o valor, insira ou aproxime o cartão e peça para o seu cliente pagar.</span></li><li className="flex gap-4"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand text-sm font-medium">3</span><span>Pronto! O comprovante será impresso. Você receberá o dinheiro das vendas na sua conta Mercado Pago.</span></li></ol><p className="mt-6 text-center sm:text-left">Você não precisa ter conta bancária para começar a vender com a Point.</p></div>
                <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
      <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/loanpro.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
    </div>

            </div>
         
        </section>
        
    );
}

export default SectionPointAir;