import type { Metadata } from 'next';
import { SidebarProvider } from '@/components/ui/sidebar';
import { MobileHeader, SidebarDesktop } from '@/content/Globals';
import './globals.css';

export const metadata: Metadata = {
  title: 'FUT Performance',
  description: 'Ajuda com o desempenho do seu time no FIFA Ultimate Team',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        <SidebarProvider>
          <SidebarDesktop />
          <main className="w-full bg-background">
            <MobileHeader />

            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
