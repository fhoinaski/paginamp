import Image from "next/image";

const SectionCredito = () => {
    return (
        <section className="bg-primary-foreground">
        <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Usar a Point pode te dar acesso a um crédito</h2>
        <div>
        <p>Ao cobrar com a Point, você tem acesso ao Mercado Crédito.</p>
        <ul className="mt-8 space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Sem papelada nem burocracia e sem custos adicionais.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>100% online, disponível na hora na sua conta do Mercado Pago.</span></li><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>Pague em parcelas fixas ou com uma porcentagem das suas vendas.</span></li></ul>
        </div>
        <div className="row-start-2 self-center sm:col-start-2 sm:row-start-1 sm:row-end-3">
        <Image
         alt="loan" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" style="color:transparent" src="/images/loan.webp"/>
        </div>
          
        </div>
        </section>
    );
    }

export default SectionCredito;