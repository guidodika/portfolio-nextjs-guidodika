import Image from "next/image";
import me from "/public/image-guidodika.png";
import Link from "next/link";
import ToogleTheme from "./toggleTheme";
import Layout from "./layout";

function Home() {
  return (
    <Layout>
      <div>
        <div className="h-screen md:h-fit grid p-10 md:flex md:justify-around pt-5 ">
          <ToogleTheme />
          <div className="font-nunito font-bold my-auto">
            <h3 className="text-2xl md:text-3xl py-1">Hey semuanya,</h3>
            <h1 className="text-3xl md:text-5xl py-1 ">Guido Dika Firguston</h1>
            <h2 className="text-xl py-2 ">Seorang Frontend Developer</h2>
            <Link href="/about">
              <button className="p-3 bg-gray-600 text-white rounded-3xl">
                Get Started
              </button>
            </Link>
          </div>
          <Image
            src={me}
            alt="gambar"
            className=" h-50 w-50 rounded-full md:w-[30%] md:h-[30%] md:rounded-b-full dark:border-2"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
