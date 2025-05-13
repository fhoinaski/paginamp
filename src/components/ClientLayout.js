'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import { TaxasModal } from './SectionTaxas';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      {!isDashboard && <Footer />}
      {/* Modal global de taxas */}
      <TaxasModal />
    </>
  );
} 