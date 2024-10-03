import Image from "next/image";

const SectionNovaAir = () => {
    return (
        <section >
        <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <div className="space-y-4 self-end text-center sm:text-left"><span className="text-sm font-bold uppercase text-brand">Nova Point Air</span><h2 className="text-2xl font-semibold sm:text-3xl">A maquininha que cativa e inspira confiança em seus clientes</h2></div>
        <div><ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>A borda se ilumina para mostrar se o pagamento foi aprovado.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>A maquininha inicia rápido, para você começar a vender na mesma hora.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>A tela é ampla e colorida, dando conforto visual para vender de noite.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Não precisa de papel. Envie os comprovantes por SMS.</span></li></ul></div>
        <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
        <Image 
        alt="account features" 
        loading="lazy" 
        width={500} 
        height={500} 
        decoding="async" 
        src="/images/new-point-air.webp" 
        quality={75} 
        sizes="(max-width: 640px) 640px, 1080px"
      />
        </div>
        </div>
        </section>
    );
    }

export default SectionNovaAir;