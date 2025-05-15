import HowToChargeSection from './shared/HowToChargeSection';

const SectionPointPro2 = () => {
    const steps = [
        { text: "Ligue a maquininha e a conecte à internet. Você não precisa do celular para usar a maquininha." },
        { text: "Digite o valor, insira ou aproxime o cartão e peça para o seu cliente pagar." },
        { text: "Pronto! O comprovante será impresso. Você receberá o dinheiro das vendas na sua conta Mercado Pago." }
    ];

    return (
        <HowToChargeSection
            title="Como cobrar com a Point Pro 3"
            steps={steps}
            imageSrc="/images/loanpro.webp"
            imageAlt="Maquininha Point Pro 3 do Mercado Pago"
        />
    );
}

export default SectionPointPro2;