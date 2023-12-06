import Head from "next/head";
import Hero from "@/components/homePage/hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Hero />
      </main>
    </>
  );
}
