"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import BootstrapClient from "./components/BootstrapClient";
import { usePathname } from "next/navigation";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";
import Toast from "./components/Toast/Toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavBar = !["/login", "/cadastro"].includes(pathname);

  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Loja virtual WA Loja" />
        <title>WA Loja</title>
      </head>
      <body>
        <ReactQueryClientProvider>
          {showNavBar && <NavBar />}
          {children}
          <BootstrapClient />
          <Toast />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
