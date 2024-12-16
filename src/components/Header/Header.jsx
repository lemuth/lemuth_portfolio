import Head from "next/head";

export default function Header(){
    return(
        <Head>
            <title>{"Gilles Saley développeur Front-end React"}</title>
            <meta name="description" content="Découvrez mon portfolio : projets, expériences, et compétences." />
            <meta property="og:title" content="Gilles Saley - Portfolio" />
            <meta property="og:description" content="Découvrez mon portfolio : projets, expériences, et compétences." />
            <meta property="og:url" content="https://lemuth.github.io/lemuth_portfolio/" />
            <meta property="og:type" content="website" />
        </Head>
    )
}