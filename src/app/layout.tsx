import { ToastContainer, toast } from "react-toastify";
import type { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MobileHeader, SidebarDesktop } from "@/content/Globals";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUT Performance",
  description: "Ajuda com o desempenho do seu time no FIFA Ultimate Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased`}>
        <ToastContainer />
        <SidebarProvider>
          <SidebarDesktop />
          <main className="w-full bg-background">
            <MobileHeader />
            <div className="p-8">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
