import Footer from "@/components/footer/Footer.jsx";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar.jsx";
import { ThemeContext, ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import Template from "./template";
import ReactQueryClientProvider from "@/utils/reactQuery/ReactQueryClientProvider.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Text Tango",
  description: "Learning and Sharing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <AuthProvider>
            <ThemeContextProvider>
              <ThemeProvider>
                <div className="relative min-h-screen bg-bg text-textColor">
                  <Navbar />
                  <div className="wrapper ">
                    <Template>{children}</Template>
                    <Footer />
                  </div>
                </div>
              </ThemeProvider>
            </ThemeContextProvider>
          </AuthProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
