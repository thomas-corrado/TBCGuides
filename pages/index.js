import Head from "next/head"
import FrontPage from "../components/frontPage";
import Experience from "../components/experience";
import Adventure from "../components/adventure";
import Testiomonial from "../components/testimonial";
import About from "../components/about";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>Hanover Guides</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
        
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <FrontPage />
          <Experience />
          <Adventure />
          <Testiomonial />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
}
