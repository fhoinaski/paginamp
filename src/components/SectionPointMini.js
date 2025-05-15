import HowToChargeSection from './shared/HowToChargeSection';

const SectionPointMini = () => {
    const steps = [
        { text: "Baixe o aplicativo do Mercado Pago. Entre em sua conta ou cadastre-se." },
        { text: "No app, escolha \"Cobrar com Point\" e vincule a maquininha pelo Bluetooth." },
        { text: "Já pode começar a vender! Você receberá o dinheiro das vendas na sua conta Mercado Pago." }
    ];

    return (
        <HowToChargeSection
            title="Como cobrar com a Point Mini NFC 2 NFC 2"
            steps={steps}
            imageSrc="/images/loanpro.webp"
            imageAlt="Maquininha Point Mini NFC 2 do Mercado Pago"
        />
    );
};

export default SectionPointMini;