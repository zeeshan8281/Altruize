import Head from "next/head";
import Image from "next/image";
import DonateTo from "./ngo/DonateTo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Care For Them</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-cutmark text-7xl bg-primaryBg h-screen ">
        <DonateTo/>
      </h1>
    </>
  );
}
