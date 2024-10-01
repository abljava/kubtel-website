import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { BottomMenu } from "@/components/bottom-menu/bottom-menu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Кубань-Телеком, Кубтел. Провайдер Краснодар. Домашний интернет и ТВ, безлимитные тарифы. Интернет оператор.",
  description:
    "Интернет-провайдер Кубань-Телеком Краснодар, Кубтел, беспроводной интернет по технологии Wimax, 4G, LTE, домашний интернет и тв, интренет для офиса, ip-телефония, цифровое телевидение, размещение оборудования в дата-центре, виртуальный сервер, колокейшн Краснодар, подключить тв, просмотр тв, тв россии, провайдеры домашнего интерента",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          "min-h-screen bg-background antialiased scrollbar-w-[50%]",
          montserrat.className
        )}
      >
        <Header />
        <main className="flex flex-col min-h-screen">
          {children}
          <BottomMenu />
        </main>
        <Footer />
      </body>
    </html>
  );
}
