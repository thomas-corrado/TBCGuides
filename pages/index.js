import Head from "next/head";
import FrontPage from "../components/frontPage";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Hanover Guides</title>
          <meta name="description" content="Hanover Guides" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <FrontPage />
        </main>
      </div>
    </div>
  );
}
