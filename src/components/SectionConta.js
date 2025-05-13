import Image from 'next/image';

const SectionConta = () => {
  return (
    <div style={{
      background: "linear-gradient(180deg, #FFE600 0%, #FFD400 100%)",
      padding: "60px 40px",
      position: "relative",
    }}>
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <h2 style={{
          color: "#000",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          marginBottom: "40px"
        }}>
          Tire os planos do papel com o Mercado Pago
        </h2>

        <div style={{
          display: "grid",
          gap: "24px",
          alignItems: "stretch"
        }} className="grid-cols-1 md:grid-cols-2">
          {/* Coluna 1: Card Crédito + Imagem Homem */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            position: "relative",
            width: "100%",

            bottom: "24px",
          }}>
            {/* Card 1 - Crédito */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              minHeight: "300px",
              bottom: "-40px",
              zIndex: "10"
            }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z" fill="black" />
                  <path d="M15 8.5C14.5 8.5 14 8.6 13.5 8.77V8H12.25V9.4C11.04 9.97 10.25 11.26 10.25 12.75C10.25 14.85 11.56 16.12 13 16.54V18H14.25V16.54C15.5 16.18 16.5 15.15 16.75 13.85H15.75C15.52 14.69 14.8 15.27 14 15.47V10.12C14.35 10.04 14.67 10 15 10C15.55 10 16 10.23 16.17 10.67H17.11C16.89 9.43 16 8.5 15 8.5ZM13 15.32C12.17 15.03 11.5 14.3 11.5 12.75C11.5 11.7 12.11 10.8 13 10.53V15.32Z" fill="black" />
                </svg>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "20px" }}>
                Crédito para investir no seu negócio
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.875rem", color: "#333" }}>
                <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "10px" }}>
                  <div style={{ backgroundColor: "#E6F5FD", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18182 7.09349L12.0468 0.228516L13.5896 1.77129L5.18182 10.179L0.410431 5.40766L1.95321 3.86488L5.18182 7.09349Z" fill="#009EE3" /></svg>
                  </div>
                  <span>100% online e sem burocracia.</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", marginBottom: "12px", gap: "10px" }}>
                  <div style={{ backgroundColor: "#E6F5FD", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18182 7.09349L12.0468 0.228516L13.5896 1.77129L5.18182 10.179L0.410431 5.40766L1.95321 3.86488L5.18182 7.09349Z" fill="#009EE3" /></svg>
                  </div>
                  <span>Receba o valor na hora.</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ backgroundColor: "#E6F5FD", borderRadius: "50%", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="12" height="9" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.18182 7.09349L12.0468 0.228516L13.5896 1.77129L5.18182 10.179L0.410431 5.40766L1.95321 3.86488L5.18182 7.09349Z" fill="#009EE3" /></svg>
                  </div>
                  <span>Venda com maquininhas Point para ter melhores condições de empréstimo.</span>
                </li>
              </ul>
            </div>
            {/* Imagem Homem Celular */}
            <div className="
    bg-white
    rounded-[16px]
    overflow-hidden
    relative
    flex-[1.5]
    min-h-[350px]
    w-full
">
              {/* Imagem de fundo */}
              <Image
                src="/images/rebrand-mp.webp"
                alt="Homem usando aplicativo do Mercado Pago"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="select-none" // Evita seleção de texto/acidental drag
              />

              {/* Imagem com efeito hover (overlay) */}
              <Image
                src="/images/Grouprebrand-mp.webp"
                alt="Overlay do aplicativo"
                layout="fill"
                objectFit="cover"
                objectPosition="center top"
                quality={100}
                className="
            z-[11]
            transition-transform
            duration-700
            scale-100
            ease-in-out
            transform
            hover:scale-105
            
        "
              />
            </div>
          </div>

          {/* Coluna 2: Card Conta Digital + Card Pagamentos Protegidos */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Card 2 - Conta Digital */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              flex: "1",
              position: "relative",
              overflow: "visible"
            }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 10H23" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className='flex gap-4 '>
                <div className='flex flex-col gap-4  h-full max-w-[150px]'>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "8px" }}>
                    Conta digital grátis
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#333", marginBottom: "30px", lineHeight: "1.8" }}>
                    Cartão de crédito sem anuidade e rendimentos de até 105% do CDI.
                  </p>
                </div>

                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "-5px",
                  width: "140px",
                  height: "auto",

                }}>
                  <Image
                    src="/images/cardmp.webp"
                    alt="Cartão Mercado Pago"
                    width={180}
                    height={113}
                    style={{ display: "block" }}
                    className="
                  
                  transition-transform
                  duration-300
                  ease-in-out
                  transform
                  scale-100
                  hover:scale-105
                  animate-float
                
              "
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Pagamentos Protegidos */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              flex: "1",
              position: "relative",
              overflow: "visible"
            }}>
              <div style={{ marginBottom: "16px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 12L11 14L15 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className='flex gap-4 '>
                <div className='flex flex-col gap-4  h-full max-w-[150px]'>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "8px" }}>
                    Pagamentos protegidos
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#333", lineHeight: "1.8" }}>
                    Segurança contra fraudes e atendimento personalizado.
                  </p>
                </div>

                <div style={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                  width: "100px",
                  height: "auto"
                }}>
                  <Image
                    src="/images/cadeadomp.webp"
                    alt="Cadeado de segurança"
                    width={90}
                    height={90}
                    style={{ display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionConta;