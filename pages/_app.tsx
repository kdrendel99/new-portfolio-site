import type { AppProps } from 'next/app'
import '../styles/global.css';
import { ReactElement, useEffect, useState } from 'react'
import {ThemeProvider} from 'next-themes'
import { Nav } from '@/components/common/Nav';
import { Goudy_Bookletter_1911 } from 'next/font/google';
import emailjs from "@emailjs/browser";
import { wrapper } from '@/redux/store';
import { SCROLL_ELEMENTS } from '@/enums/scroll-elements.enum';
import { Footer } from '@/components/common/Footer';

const bookletter = Goudy_Bookletter_1911({
    subsets: ['latin'],
    weight: ["400"],
    variable: '--font-bookletter'
})

function MyApp({ Component, pageProps }: AppProps): ReactElement {
    const [elementToScrollTo, setElementToScrollTo] = useState(SCROLL_ELEMENTS.NONE);

    return (
        <>
              <style jsx global>
                {`
                :root {
                    --font-bookletter: ${bookletter.style.fontFamily};
                }
                `}
            </style>
            <ThemeProvider attribute='class'>
                <Nav {...pageProps} setScrollEl={(el: SCROLL_ELEMENTS) => setElementToScrollTo(el)} />
                <Component {...pageProps} setScrollEl={(el: SCROLL_ELEMENTS) => setElementToScrollTo(el)}/>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default wrapper.withRedux(MyApp);
