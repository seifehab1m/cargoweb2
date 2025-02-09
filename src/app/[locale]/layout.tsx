import type { Metadata } from "next";
import "@/src/assets/styles/globals.scss";
import Navbar from "@/src/components/shared/navbar/Navbar";
import { Roboto } from "next/font/google";
import Provider from "@/src/components/shared/provider/Provider";
import Footer from "@/src/components/shared/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CarGoWeb",
  description: "CarGoWeb",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={roboto.className}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
