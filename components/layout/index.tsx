import { useState } from 'react';
import { Header, Footer } from '../';

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [isMobileMenuCollapsed, setIsMobileMenuCollapsed] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <Header
        isMobileMenuCollapsed={isMobileMenuCollapsed}
        onMobileMenuCollapsedChange={setIsMobileMenuCollapsed}
      />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}

function Content({ children }: LayoutProps): JSX.Element {
  return (
    <div className="relative flex flex-col">
      <main className="z-10 container mx-auto px-4 py-5 sm:px-6 lg:px-8 text-white mb-32">
        {children}
      </main>
      <div className="absolute inset-x-0 bottom-0">
        <img
          className="w-full"
          src="/monika-config-generator/wave-monika.svg"
          alt="wave background"
        />
        <div className="w-full h-px bg-gradient-to-r from-purple to-aqua" />
      </div>
    </div>
  );
}
