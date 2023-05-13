import "@/styles/globals.css";
import NavBar from "./navbar";
import Footer from "./footer";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ThemeProvider attribute="class">
        <div>
          <NavBar />
          <div className="pt-16">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </AnimatePresence>
  );
}
