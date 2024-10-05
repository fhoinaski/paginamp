const SectionTaxas = () => {
    return (
        <section className="bg-primary-foreground">
            <div className="card container space-y-8 py-16">
                <div className="space-y-4"><h2 className="text-center text-2xl font-semibold sm:text-3xl">Receba o dinheiro de suas vendas na hora</h2><p className="text-center">Você escolhe quando ter o dinheiro disponível e qual taxa pagar por cada venda.</p>
                </div>
                <div className="mx-auto flex justify-center gap-6 text-center leading-tight sm:max-w-xl">
                    <div className="flex w-full flex-col items-center gap-2 rounded bg-white p-4 shadow-xl shadow-black/5 dark:bg-accent dark:shadow-black/20"><h3 className="font-semibold uppercase text-brand">Débito na hora</h3>
                        <span className="text-2xl font-semibold">1,99%</span></div><div className="flex w-full flex-col items-center gap-2 rounded bg-white p-4 shadow-xl shadow-black/5 dark:bg-accent dark:shadow-black/20"><h3 className="font-semibold uppercase text-brand">Crédito na hora</h3><span className="text-2xl font-semibold">4,98%</span>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-6 sm:max-w-xl sm:grid-cols-2">
                    <div className="space-y-2 sm:col-start-2"><p className="text-center">Prazos com crédito</p>
                        <div className="flex justify-between px-2 text-lg">
                            <span>Em <strong>14</strong> dias</span><span>3,79%</span>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full">
                        </div>
                        <div className="flex justify-between px-2 text-lg"><span>Em <strong>30</strong> dias</span><span>3,03%</span>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTaxas;