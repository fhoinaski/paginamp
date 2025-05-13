import React from 'react';
import Image from 'next/image';
import IconPix from './IconPix';

// You can keep SVGs inline or extract them into separate component files for better organization

const IconClockFast = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black opacity-90">
        <path fillRule="evenodd" clipRule="evenodd" d="M22.0673 33.0938C29.48 33.0938 35.4892 27.0846 35.4892 19.6719C35.4892 12.2592 29.48 6.25 22.0673 6.25C17.2921 6.25 13.0993 8.74375 10.7202 12.5H13.2609C15.3434 9.94594 18.5149 8.3149 22.0673 8.3149C28.3396 8.3149 33.4243 13.3996 33.4243 19.6719C33.4243 25.9442 28.3396 31.0288 22.0673 31.0288C18.2468 31.0288 14.8669 29.1423 12.8083 26.25H10.3652C12.6664 30.3349 17.0447 33.0938 22.0673 33.0938ZM23.0963 19.0322V11.2838H21.0314V20.3082L26.657 23.1218L27.5806 21.275L23.0963 19.0322Z" fill="currentColor"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.27148 14.5068C3.27148 13.9891 3.69122 13.5693 4.20898 13.5693H14.2423C14.7601 13.5693 15.1798 13.9891 15.1798 14.5068C15.1798 15.0246 14.7601 15.4443 14.2423 15.4443H4.20898C3.69122 15.4443 3.27148 15.0246 3.27148 14.5068ZM2.41211 23.4601C2.41211 22.9423 2.83184 22.5226 3.34961 22.5226H13.383C13.9007 22.5226 14.3205 22.9423 14.3205 23.4601C14.3205 23.9778 13.9007 24.3976 13.383 24.3976H3.34961C2.83184 24.3976 2.41211 23.9778 2.41211 23.4601ZM2.5 18.0463C1.98223 18.0463 1.5625 18.466 1.5625 18.9838C1.5625 19.5015 1.98223 19.9213 2.5 19.9213H12.5334C13.0511 19.9213 13.4709 19.5015 13.4709 18.9838C13.4709 18.466 13.0511 18.0463 12.5334 18.0463H2.5Z" fill="currentColor"></path>
    </svg>
);

const IconChip4G = () => (
    <svg width="69" height="86" viewBox="0 0 82 86" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="paint0_linear_chip" x1="61.3882" y1="52.4029" x2="-44.1826" y2="52.2633" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
        </defs>
        <path d="M69.1675 10.4012V8.41532H64.4844V6.86444L69.0364 0.355026H71.008V6.79228H72.2835V8.41634H71.008V10.4022H69.1665L69.1675 10.4012ZM69.1675 6.79025V2.93338L66.4712 6.79025H69.1675Z" fill="black" fillOpacity="0.9"></path>
        <path d="M78.882 8.8492C79.1818 8.8492 79.5395 8.82481 79.9552 8.77705V6.32674H78.071V4.76062H81.9563V9.79132C81.502 10.0332 80.9603 10.2212 80.3323 10.3564C79.7042 10.4915 79.066 10.5596 78.4186 10.5596C76.8524 10.5596 75.6471 10.1196 74.8015 9.24048C73.956 8.36138 73.5332 7.10929 73.5332 5.48524C73.5332 3.76464 73.9702 2.4526 74.8452 1.54911C75.7203 0.645613 76.9886 0.193359 78.6513 0.193359C79.7916 0.193359 80.7723 0.391538 81.5945 0.787896V2.4404C80.5894 2.12128 79.6859 1.96173 78.883 1.96173C77.8098 1.96173 77.0222 2.23003 76.5201 2.76664C76.017 3.30324 75.766 4.14677 75.766 5.29621V5.5574C75.766 6.69769 76.015 7.53208 76.513 8.05852C77.011 8.58497 77.8007 8.84819 78.883 8.84819L78.882 8.8492Z" fill="black" fillOpacity="0.9"></path>
        <path d="M15.8078 9.41894C13.0266 9.41894 9.84977 12.201 9.84977 15.929C9.66925 32.7086 9.84982 64.9272 9.84977 70.9556C9.84969 78.8949 16.1461 81.0025 18.5462 81.1909H57.376C66.7896 81.1909 66.7896 72.3964 66.7896 69.6962L66.7896 26.1351C66.7896 21.2958 66.1358 20.4607 65.2674 19.3512L65.2356 19.3107C63.6882 17.7408 58.7346 12.8153 57.3543 11.4316C55.2597 9.33166 53.8506 9.30479 50.8733 9.3185C41.7957 9.36029 18.5891 9.41894 15.8078 9.41894Z" stroke="black" strokeOpacity="0.9" strokeWidth="4"></path>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.5528 21.6071C15.5528 18.5727 18.1101 16.3084 20.349 16.3084C22.5878 16.3084 41.2686 16.2606 48.576 16.2266C50.9726 16.2154 52.1069 16.2373 53.793 17.9465C54.1754 18.3341 54.8984 19.063 55.7331 19.9046C57.3239 21.5085 59.3204 23.5214 60.1373 24.3595L60.1629 24.3925C60.862 25.2955 61.3882 25.9752 61.3882 29.914L61.3882 65.3695C61.3882 67.5673 61.3882 74.7253 53.8105 74.7253H22.5533C20.6213 74.572 15.5528 72.8566 15.5528 66.3945C15.5528 65.2769 15.5453 63.0533 15.5354 60.1242C15.5017 50.1936 15.4406 32.1536 15.5528 21.6071ZM21.789 60.3251C21.789 61.8163 22.9979 63.0251 24.489 63.0251L50.589 63.0251C52.0802 63.0251 53.289 61.8163 53.289 60.3251L53.289 35.1251C53.289 33.6339 52.0802 32.4251 50.589 32.4251L24.489 32.4251C22.9979 32.4251 21.789 33.6339 21.789 35.1251L21.789 60.3251Z" fill="url(#paint0_linear_chip)"></path>
        <path d="M50.46 32.7976L26.3367 32.7974C23.2016 32.7974 23.1999 33.3799 23.1915 36.2715L23.1914 36.2997V60.1516C23.1914 62.9704 23.3724 62.975 25.3588 62.975C31.1784 62.9963 46.1895 62.975 49.9183 62.975C53.3785 62.975 53.3785 62.2089 53.3785 59.6675V35.6401C53.3785 32.7976 52.8529 32.7976 50.4608 32.7976H50.46Z" stroke="black" strokeOpacity="0.9" strokeWidth="4"></path>
        <path d="M34.7422 36.1523L34.7422 34.6523L31.7422 34.6523L31.7422 36.1523L34.7422 36.1523ZM31.7422 39.5064C31.7422 40.3349 32.4137 41.0064 33.2422 41.0064C34.0706 41.0064 34.7422 40.3349 34.7422 39.5064L31.7422 39.5064ZM31.7422 36.1523L31.7422 39.5064L34.7422 39.5064L34.7422 36.1523L31.7422 36.1523Z" fill="black" fillOpacity="0.9"></path>
        <path d="M34.7422 59.6283L34.7422 61.1283L31.7422 61.1283L31.7422 59.6283L34.7422 59.6283ZM31.7422 52.9201C31.7422 52.0917 32.4137 51.4201 33.2422 51.4201C34.0706 51.4201 34.7422 52.0917 34.7422 52.9201L31.7422 52.9201ZM31.7422 59.6283L31.7422 52.9201L34.7422 52.9201L34.7422 59.6283L31.7422 59.6283Z" fill="black" fillOpacity="0.9"></path>
        <path d="M44.8127 36.1527L44.8127 34.6527L41.8127 34.6527L41.8127 36.1527L44.8127 36.1527ZM41.8127 39.5069C41.8127 40.3353 42.4842 41.0069 43.3127 41.0069C44.1411 41.0069 44.8127 40.3353 44.8127 39.5069L41.8127 39.5069ZM41.8127 36.1527L41.8127 39.5069L44.8127 39.5069L44.8127 36.1527L41.8127 36.1527Z" fill="black" fillOpacity="0.9"></path>
        <path d="M44.8127 59.6283L44.8127 61.1283L41.8127 61.1283L41.8127 59.6283L44.8127 59.6283ZM41.8127 52.9201C41.8127 52.0917 42.4842 51.4201 43.3127 51.4201C44.1411 51.4201 44.8127 52.0917 44.8127 52.9201L41.8127 52.9201ZM41.8127 59.6283L41.8127 52.9201L44.8127 52.9201L44.8127 59.6283L41.8127 59.6283Z" fill="black" fillOpacity="0.9"></path>
    </svg>
);


const IconSimCard = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black opacity-90">
        <path d="M6.52044 2.03975C5.35953 2.03975 4.03349 3.12355 4.03349 4.57589C3.95814 11.1127 4.03351 23.6641 4.03349 26.0126C4.03346 29.1056 6.66163 29.9266 7.66344 30H23.8713C27.8006 30 27.8006 26.5739 27.8006 25.522L27.8006 8.55187C27.8006 6.66664 27.5277 6.3413 27.1652 5.90908L27.152 5.89328C26.5061 5.2817 24.4384 3.36288 23.8623 2.82381C22.988 2.00575 22.3998 1.99528 21.1571 2.00062C17.368 2.01691 7.68135 2.03975 6.52044 2.03975Z" stroke="#1A1A1A" strokeWidth="2"></path>
        <path d="M20.9834 11.8009L10.9144 11.8008C9.6058 11.8008 9.60509 12.0439 9.6016 13.2509L9.60156 13.2626V23.2183C9.60156 24.3949 9.67711 24.3968 10.5062 24.3968C12.9353 24.4057 19.2009 24.3968 20.7573 24.3968C22.2016 24.3968 22.2016 24.0771 22.2016 23.0163V12.9873C22.2016 11.8009 21.9822 11.8009 20.9837 11.8009H20.9834Z" stroke="#1A1A1A" strokeWidth="2"></path>
        <path d="M14.8008 13.2012L14.8008 12.2012L12.8008 12.2012L12.8008 13.2012L14.8008 13.2012ZM12.8008 14.6012C12.8008 15.1535 13.2485 15.6012 13.8008 15.6012C14.3531 15.6012 14.8008 15.1535 14.8008 14.6012L12.8008 14.6012ZM12.8008 13.2012L12.8008 14.6012L14.8008 14.6012L14.8008 13.2012L12.8008 13.2012Z" fill="#1A1A1A"></path>
        <path d="M14.8008 23L14.8008 24L12.8008 24L12.8008 23L14.8008 23ZM12.8008 20.2C12.8008 19.6477 13.2485 19.2 13.8008 19.2C14.3531 19.2 14.8008 19.6477 14.8008 20.2L12.8008 20.2ZM12.8008 23L12.8008 20.2L14.8008 20.2L14.8008 23L12.8008 23Z" fill="#1A1A1A"></path>
        <path d="M19 13.2012L19 12.2012L17 12.2012L17 13.2012L19 13.2012ZM17 14.6012C17 15.1535 17.4477 15.6012 18 15.6012C18.5523 15.6012 19 15.1535 19 14.6012L17 14.6012ZM17 13.2012L17 14.6012L19 14.6012L19 13.2012L17 13.2012Z" fill="#1A1A1A"></path>
        <path d="M19 23L19 24L17 24L17 23L19 23ZM17 20.2C17 19.6477 17.4477 19.2 18 19.2C18.5523 19.2 19 19.6477 19 20.2L17 20.2ZM17 23L17 20.2L19 20.2L19 23L17 23Z" fill="#1A1A1A"></path>
    </svg>
);

const IconBattery = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black opacity-90">
        <path d="M29 12L29 20" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
        <rect x="2" y="6" width="23.0589" height="20" rx="3.49" stroke="#1A1A1A" strokeWidth="2.2"></rect>
        <path d="M14.8235 10.4123V21.5879" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"></path>
        <path d="M10.8821 10.4121V21.5877" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"></path>
        <path d="M6.94072 10.4121V21.5877" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round"></path>
    </svg>
);

const IconBatteryCharge = () => (
    <svg width="51" height="80" viewBox="0 0 56 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
            <linearGradient id="paint0_linear_battery" x1="79.5273" y1="108.5" x2="-81.4727" y2="108" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00E587"></stop>
                <stop offset="1" stopColor="#85DEFF"></stop>
            </linearGradient>
        </defs>
        <rect x="4.12695" y="90" width="80.8" height="48.8" rx="7.02788" transform="rotate(-90 4.12695 90)" stroke="currentColor" strokeOpacity="0.9" strokeWidth="4" className="text-black/90"></rect>
        <path d="M34.9262 3.20019L21.3262 3.2002" stroke="currentColor" strokeOpacity="0.9" strokeWidth="4" strokeLinecap="round" className="text-black/90"></path>
        <rect x="9.52734" y="85" width="70" height="38" rx="3" transform="rotate(-90 9.52734 85)" fill="url(#paint0_linear_battery)"></rect>
        <path d="M18.0918 50.7482L28.9263 33.7197C29.8587 32.2543 32.1301 33.1157 31.8563 34.8308L30.2142 45.1168C30.059 46.0887 30.8099 46.969 31.7942 46.969H36.7615C38.0346 46.969 38.7978 48.3837 38.0986 49.4476L27.5432 65.5114C26.5671 66.9969 24.2589 66.0213 24.6441 64.286L26.6716 55.1539C26.8934 54.1548 26.1331 53.2071 25.1096 53.2071H19.4418C18.1793 53.2071 17.4141 51.8134 18.0918 50.7482Z" fill="currentColor" fillOpacity="0.9" className="text-black/90"></path>
    </svg>
);


const PointProSection = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-36 mt-36 mb-0 font-proxima-nova">
            <div className='w-96 sm:w-full mx-auto'>

            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12 md:mb-16">
                A Point Pro 3 acelera o ritmo das suas vendas
            </h2>
            </div>

            {/* Card 1: Processamento Rápido - Ocupa largura total em todos os breakpoints */}
            <div className="mb-8">
                <div className="rounded-[40px] h-[419px] p-8 md:p-10 relative flex flex-col md:flex-row items-start md:items-center justify-between bg-gradient-to-t w-96 sm:w-full mx-auto from-yellow-300 to-yellow-400 overflow-hidden">
                    {/* Text Side */}
                    <div className="md:w-1/2 lg:w-2/5 z-10 text-gray-900 relative pb-8 md:pb-0">
                        <div className="mb-4 h-10 w-10">
                            <IconClockFast />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">
                            Processamento rápido para vender em segundos
                        </h3>
                        <p className="text-lg text-black/80">
                            Cobre com Pix por aproximação para ainda mais agilidade.
                        </p>
                    </div>

                    {/* Image Side */}
                    <div className="md:w-1/2 lg:w-3/5 h-full relative flex items-end justify-center md:self-end">
                        {/* Floating Pix Icon - Elevada com z-index para ficar sobre a imagem */}
                        <div
                            className="absolute top-[5%] right-[8%] w-[119px] h-[130px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-[-28.8px_0px_57.6px_0px_rgba(0,0,0,0.16)] flex items-center justify-center z-20"
                            style={{ paddingTop: '18px', paddingRight: '15px', paddingBottom: '10px', paddingLeft: '15px' }}
                        >
                            <div className="w-[73px] h-[73px]">
                                <IconPix />
                            </div>
                        </div>
                        {/* Main Image with hover effect - Colada na parte de baixo */}
                        <div >
                            <div className="w-full transform transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/images/point/point-pro3-1.webp"
                                    alt="Lector Point Smart mostrando tela de pagamento aprovado"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                    objectFit="contain"
                                    objectPosition="bottom"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards 2 e 3: Grid com dois cards lado a lado no desktop, um embaixo do outro no mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                {/* Card 2: Internet Ilimitada */}
                <div className="rounded-[40px] w-96 sm:w-full  mx-auto  p-8 md:p-10 relative flex flex-col bg-gradient-to-t from-yellow-300 to-yellow-400 overflow-hidden">
                    {/* Text Side */}
                    <div className="z-10 text-gray-900 flex-shrink-0">
                        <div className="mb-4 h-8 w-8">
                            <IconSimCard />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 md:mb-6">
                            Internet ilimitada com chip 4G grátis e WiFi
                        </h3>
                    </div>

                    {/* Image Side */}
                    <div className="flex-grow relative -mx-8 -mb-8 md:-mx-10 md:-mb-10 mt-6 flex items-end justify-center overflow-hidden group">
                        {/* Floating Chip Icon */}
                        <div
                            className="absolute top-[48%] right-[11%] w-[119px] h-[130px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-[-31.5px_0px_63px_0px_rgba(0,0,0,0.16)] flex items-center justify-center p-4 z-10"
                        >
                            <div className="w-[69px] h-[86px]">
                                <IconChip4G />
                            </div>
                        </div>
                        {/* Main Image with hover effect */}
                        <div className="w-96 transform transition-transform duration-300 group-hover:scale-105 ">
                            <Image
                                src="/images/point/point-pro3-2.webp"
                                alt="Lector Point Smart com chip 4G"
                                layout="responsive"
                                width={300}
                                height={400}
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Card 3: Bateria */}
                <div className="rounded-[40px] w-96 sm:w-full  mx-auto  p-8 md:p-10 relative flex flex-col bg-gradient-to-t from-yellow-300 to-yellow-400 overflow-hidden">
                    {/* Text Side */}
                    <div className="z-10 text-gray-900 flex-shrink-0">
                        <div className="mb-4 h-8 w-8">
                            <IconBattery />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 md:mb-6">
                            Até 48 horas de bateria para cobrar sem parar
                        </h3>
                    </div>

                    {/* Image Side */}
                    <div className="flex-grow relative -mx-8 -mb-8 md:-mx-10 md:-mb-10 mt-6 flex items-end justify-center overflow-hidden group">
                        {/* Floating Battery Icon */}
                        <div
                            className="absolute top-[48%] right-[11%] w-[119px] h-[130px] rounded-2xl bg-white/70 backdrop-blur-sm shadow-[-28.8px_0px_57.6px_0px_rgba(0,0,0,0.16)] flex items-center justify-center z-10"
                            style={{ paddingTop: '22px', paddingRight: '27px', paddingBottom: '18px', paddingLeft: '24px' }}
                        >
                            <div className="w-[51px] h-[80px]">
                                <IconBatteryCharge />
                            </div>
                        </div>
                        {/* Main Image with hover effect */}
                        <div className="w-full transform transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/images/point/point-pro3-3.webp"
                                alt="Lector Point Smart com indicador de bateria"
                                layout="responsive"
                                width={500}
                                height={600}
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PointProSection;