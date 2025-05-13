const fs = require('fs');
import { connectToDatabase } from './src/lib/mongodb';
import { fetchProductData } from './src/data/productData';
import ProductCard from './src/components/ui/ProductCard';

const content = `// Server Component para listar produtos
async function Produtos() {
  try {
    // Usar URL absoluta para Server Components
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 
                  (typeof window === 'undefined' ? 'http://localhost:3000' : '');
    
    const response = await fetch(\`\${apiUrl}/api/products\`, {
      next: { revalidate: 3600 } // Revalidar a cada hora
    });
    
    if (!response.ok) {
      throw new Error(\`Erro ao buscar produtos: \${response.status}\`);
    }

    const { products } = await response.json();

    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <ProductCard key={product._id} productId={product._id} />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return (
      <div className="p-4 text-center">
        <p className="text-red-500">Erro ao carregar produtos: {error.message}</p>
      </div>
    );
  }
}

export default Produtos;`;

fs.writeFileSync('src/components/Produtos.js', content, { encoding: 'utf8' });
console.log('Arquivo Produtos.js criado com sucesso!'); 