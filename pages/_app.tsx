import Head from "next/head"

export default function MyApp({ Component }: { Component: any }) {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="keywords" content="Versiani, Renato, Developer, Programming" />
                <meta name="author" content="Versiani Renato" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="Versiani Portfolio" />
                <meta name="description" content="Check out my portfolio." />
            </Head>

            <main>
                <Component />
            </main>
        </div>
    )
}