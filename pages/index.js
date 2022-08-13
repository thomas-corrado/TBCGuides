import Head from "next/head";
import Experience from "../components/experience";
import FrontPage from "../components/frontPage";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Hanover Guides</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <FrontPage />
          <Experience />
        </main>
      </div>
    </div>
  );
}
