import Head from "next/head";
import Hero from "@/components/homePage/hero";
import Feature from "@/components/homePage/feature";
import WhatWeDo from "@/components/homePage/whatWeDo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <Hero />
        <Feature />
        <WhatWeDo />
      </main>
    </>
  );
}
