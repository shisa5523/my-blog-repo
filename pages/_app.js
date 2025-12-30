import { Cabin } from 'next/font/google';
import "@/styles/globals.css";

const cabin = Cabin({ subsets: ['vietnamese'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={cabin.className}>
      <Component {...pageProps} />
    </div>
  );
}
