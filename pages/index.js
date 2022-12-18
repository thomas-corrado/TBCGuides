import Head from "next/head"
import HomePage from "../components/Homepage/Main/Homepage";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <meta
            name="google-site-verification"
            content="EM19wPbtiFI0glqYg6zFRnKZLLSWg5hPKLGg4HmegVI"
          />
          <title>TBC Guides</title>
          <meta
            property="og:image"
            content="https://s3.amazonaws.com/tbcguides.fish/Homepage_2.jpeg"
          />
          <meta property="og:title" content="TBC Guides" />
          <meta
            property="og:description"
            content="The Upper Valley&#39;s Premiere Kayak, Ice, and Fly Fishing Guide Service"
          />
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover"
          ></meta>
          <meta name="theme-color" content="#596d90"></meta>
          <link rel="icon" href="/phishing.ico" />
        </Head>

        <main>
          <HomePage></HomePage>
        </main>
      </div>
    </div>
  );
}
