import "@/styles/globals.css";
import "@/styles/embla.css";
import { LangageContextProvider } from "@/hooks/contextProvider"

export default function App({ Component, pageProps }) {
  return (
    <LangageContextProvider>
      <Component {...pageProps} />
    </LangageContextProvider>
  )
}
