import type { Metadata } from 'next';
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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
