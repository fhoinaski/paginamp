import Image from "next/image";
import { fetchProductData } from "../../data/productData";

const HeroSectionPointAir = () => {
    const productData = fetchProductData();
    const pointMini = productData.find(product => product.name === "Point Mini");
    const priceMini = pointMini ? parseFloat(pointMini.price.replace(',', '.')) : null;
    const normalPriceMini = pointMini ? parseFloat(pointMini.normalPrice.replace(',', '.')) : null;
    const discountPro = priceMini && normalPriceMini ? (normalPriceMini - priceMini) : null;

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    };


    return (
        <section>
            <div className="relative bg-gradient-to-b py-8 md:bg-gradient-to-br md:py-12 from-[#0a0080] to-[#00bcff]">
                <div className="card container grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col items-center text-center md:items-start md:justify-center md:text-left">
                        <div className="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-brand border-transparent hover:bg-brand/80 uppercase text-white">Point Mini NFC2</div>
                        <h1 className="mt-4 text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
                            Você tem um<br /> desconto de R$&nbsp;{formatPrice(discountPro)}<br />na Point Mini NFC2
                        </h1>
                        <div className="mt-8 flex flex-col text-white">
                            <span className="text-xl line-through">R$&nbsp;{formatPrice(normalPriceMini)}</span>
                            <span className="text-3xl font-semibold">R$&nbsp;{formatPrice(priceMini)}</span>
                        </div>
                        <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6"><a href="/comprar/point-mini" className="relative inline-flex items-center justify-center shrink-0 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground hover:bg-primary-foreground/90 dark:hover:bg-primary/90 h-12 px-8 text-base md:w-full md:max-w-[210px]">Comprar agora</a><div className="flex items-center gap-3 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck shrink-0"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="text-sm">Frete grátis para todo o Brasil</span></div></div>
                    </div>
                    <div className="flex justify-center md:h-[450px]">
                        <Image
                            alt="hero-image"
                            fetchPriority="high"
                            width={450}
                            height={450}
                            decoding="async"
                            data-nimg="1"
                            className="object-contain"
                            src="/images/point/device-45.webp"
                            style={{ color: 'transparent' }}
                        />
                    </div>
               
                </div>
                <ul className="card container flex flex-col flex-wrap justify-center gap-3 pt-8 text-sm leading-tight text-white sm:flex-row md:gap-x-8"><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi shrink-0"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg><p>Plano de dados grátis e Wi‑Fi</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb shrink-0"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg><p>Visor com luz automática</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><p>Envia o comprovante por e-mail e SMS</p></li><li className="flex flex-1 items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-medium shrink-0"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line><line x1="6" x2="6" y1="11" y2="13"></line><line x1="10" x2="10" y1="11" y2="13"></line></svg><p>Até 15 horas de bateria</p></li></ul>
            </div>
        </section>
    );
}

export default HeroSectionPointAir;