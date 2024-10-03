
import ProductCard from './ProductCard';
import { fetchProductData } from '../data/productData'

const Produtos = () => {
    const productData = fetchProductData();

    return (
        <section className='-mt-24 bg-primary-foreground'>
            <div className='grid grid-cols-1 justify-center gap-8 px-4 py-8 sm:grid-cols-[repeat(auto-fit,_minmax(256px,_256px))]'>
            {productData.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
                  </div>
        </section>
    );
  };

export default Produtos;


