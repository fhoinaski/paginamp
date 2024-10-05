'use client';
import ConfiguraPedido from '../../../components/comprar/ConfiguraPedido'
import { fetchProductData } from "../../../data/productData";


export default function ComprarPage({ params }) {
    const { model } = params;
    const productData = fetchProductData();
    const product = productData.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === model);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <section>
            <header className="nav-custom-header h-16 rounded-none w-full size-0"></header>
            <div className="container mx-auto py-8">
                {/* <h1 className="text-2xl font-bold mb-4">Comprar {product.name}</h1> */}
                <ConfiguraPedido productModel={product.name} />
            </div>
        </section>
    );
}