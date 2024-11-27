import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar/Navbar";
import FavoritosProvider from "./state/FavoritosProvider";
import AuthProvider from "./state/AuthProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryClientProvider } from "./components/ReactQueryClient";

export const metadata: Metadata = {
  title: "WA Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ReactQueryClientProvider>
          <AuthProvider>
            <FavoritosProvider>
              <Navbar />
              {children}
              <BootstrapClient />
            </FavoritosProvider>
          </AuthProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
