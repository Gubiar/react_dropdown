import "@/styles/globals.css";
import { DropdownContext, DropdownProvider } from "@/context/DropdownContext";

export default function App({ Component, pageProps }) {
    return (
        <DropdownProvider>
            <Component {...pageProps} />
        </DropdownProvider>
        
    );
}
