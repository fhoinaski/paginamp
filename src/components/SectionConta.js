import Image from 'next/image';

const SectionConta = () => {
    return (
        <section >
            <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
                <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-2xl">Faça tudo pela sua conta Mercado Pago</h2>
                <ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Pague boletos</strong> e recarregue seu celular ou cartão de transporte pelo app de Mercado Pago.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Compre no Mercado Livre</strong> e em centenas de lojas com o cartão Mercado Pago ou código QR.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Gere mais rendimentos</strong> do que com a poupança.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span> <strong>Receba um crédito</strong> on-line e na hora.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Crie uma <strong>conta PJ gratuita</strong> e sem burocracia.</span></li></ul>
                <div className="row-start-2 self-center sm:row-start-1 sm:row-end-3">
      <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/account-features.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
    </div>

            </div>
            <div className='card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2'>
            <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Muitas formas de sacar seu dinheiro</h2>
            <ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Faça transferências para contas bancárias ou digitais.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Saque dinheiro sem cartão em caixas do Banco24Horas.</span></li></ul>
            <div className='row-start-2 self-center sm:row-start-1 sm:row-end-3'>
            <Image 
            alt="ways to withdraw" 
            loading="lazy" 
            width="500" 
            height="500" 
            decoding="async" 
            data-nimg="1" 
            style="color:transparent"
             src="/images/ways-to-withdraw.webp"
             quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"/>
            </div>
            </div>
        </section>
        
    );
}

export default SectionConta;