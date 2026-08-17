import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Имя Фамилия — Frontend Developer & Team Lead",
  description:
    "Опытная frontend-разработчица и Team Lead. Разрабатываю интерфейсы, выстраиваю процессы и помогаю командам создавать продукты эффективнее.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-bg font-sans text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
