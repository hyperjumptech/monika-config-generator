import { useState } from 'react';
import { Header, Footer } from '../';

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [isMobileMenuCollapsed, setIsMobileMenuCollapsed] = useState(false);

  return (
    <div className="bg-black">
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
    <main className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
      {children}
    </main>
  );
}
