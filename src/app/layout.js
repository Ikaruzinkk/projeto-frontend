import "./globals.css";
import Header from "@/components/Header"

export const metadata = {
  title: "Catequese",
  description: "Criando a Catequese",
  charset: 'UTF-8',
  Author: 'O Padre da Catequese',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
