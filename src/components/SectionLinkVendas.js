import Image from "next/image";

const SectionLinkVendas = () => {
    return (
        <section className="">
        <div className="card container grid grid-cols-1 gap-8 py-16 sm:grid-cols-2">
        <h2 className="self-end text-center text-2xl font-semibold sm:text-left sm:text-3xl">Venda parcelado nas redes sociais com um Link de pagamento</h2>
        <div><ul className="space-y-6"><li className="flex gap-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big shrink-0"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg><span>É só criar um link e enviá-lo ao seu cliente.</span></li></ul></div>
        <div className="row-start-2 self-center sm:row-start-1 sm:row-end-3">
        <Image alt="payment link" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" style="color:transparent" src="/images/payment-link.webp"/>
        </div>
        
        </div>
        </section>
    );

}

export default SectionLinkVendas;