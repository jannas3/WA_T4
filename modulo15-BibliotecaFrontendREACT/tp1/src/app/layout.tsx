import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar"; 

export const metadata: Metadata = {
  title: "Loja Virtual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        <main>{children}</main> 
      </body>
    </html>
  );
}
