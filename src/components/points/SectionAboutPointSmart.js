'use client'
import Image from "next/image";

const SectionAboutPointSmart = () => {
    return (
        <section className="mt-3 mb-0">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Venda sem parar com a Point Smart 2
                </h2>
                
                <div className="flex flex-col gap-6">
                    {/* Card grande */}
                    <div className="w-full bg-[#ffe600] rounded-xl overflow-hidden" style={{ height: "380px" }}>
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-black mb-4">Até 3 dias de bateria</h3>
                                <p className="text-black text-lg">Venda sem se preocupar em carregar a maquininha.</p>
                            </div>
                            <div className="md:w-1/2 relative h-full flex items-center justify-center">
                                <Image
                                    src="/images/point/card-1-smart-mp.webp"
                                    alt="Point Smart 2 com bateria de longa duração"
                                    width={500}
                                    height={380}
                                    className="object-contain -mb-28"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Cards menores */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card Bobinas */}
                        <div className="bg-[#ffe600] rounded-xl overflow-hidden" style={{ height: "300px" }}>
                            <div className="flex flex-col h-full">
                                <div className="p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-black">Bobinas grátis para sempre</h3>
                                </div>
                                <div className="relative flex-grow flex items-center justify-center">
                                    <Image
                                        src="/images/point/card-2.webp"
                                        alt="Point Smart 2 com bobinas grátis"
                                        width={320}
                                        height={200}
                                        className="object-contain -mb-6"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Card Garantia */}
                        <div className="bg-[#ffe600] rounded-xl overflow-hidden" style={{ height: "300px" }}>
                            <div className="flex flex-col h-full">
                                <div className="p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-black">Garantia de 3 anos</h3>
                                </div>
                                <div className="relative flex-grow flex items-center justify-center">
                                    <Image
                                        src="/images/point/card-3.webp"
                                        alt="Point Smart 2 com garantia de 3 anos"
                                        width={320}
                                        height={200}
                                        className="object-contain -mb-6"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionAboutPointSmart; 