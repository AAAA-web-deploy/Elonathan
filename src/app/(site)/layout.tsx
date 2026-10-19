import type { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
