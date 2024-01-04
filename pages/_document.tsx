import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';

class MyDocument extends Document {

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='preload'
                        href='/fonts/NWT.otf'
                        as='font'
                        crossOrigin=''
                        type='font/otf'
                    />
                    <link rel="shortcut icon" href="/static/kd-favicon.png" />
                </Head>

                <body className="dark:bg-[#000000]">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
