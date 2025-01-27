import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function App({ Component, pageProps }) {
  return 
  <main className={montserrat.className}>
      <Component {...pageProps} />;
  </main>

}
