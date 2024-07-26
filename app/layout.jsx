import { Sacramento } from "next/font/google";
import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Prompt",
});
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Sacramento",
});

export const metadata = {
  title: "Vallabh Traders",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${prompt.variable} ${sacramento.variable}`}>
        <div>
          <Header />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
