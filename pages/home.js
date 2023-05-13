import Image from "next/image";
import me from "/public/image-guidodika.png";
import Link from "next/link";
import ToogleTheme from "./toggleTheme";
import Layout from "./layout";
import AnimatedText from "../components/AnimatedText";

function Home() {
  const dynamicTexts = [
    "Selamat Pagi",
    "Selamat Siang",
    "Selamat Sore",
    "Selamat Malam",
    "Berkah Dalem",
  ];

  return (
    <Layout>
      <div>
        <div className="min-h-screen md:h-fit grid p-10 md:flex md:justify-around pt-5 ">
          <ToogleTheme />
          <div className="font-nunito font-bold my-auto">
            <div className="relative text-2xl md:text-3xl py-1 font-lobster flex">
              <AnimatedText texts={dynamicTexts} />
              <h2 className="pl-2">Semuanya</h2>
            </div>
            <h1 className="text-3xl sm:text-2xl md:text-5xl py-1 ">
              Guido Dika Firguston
            </h1>
            <h2 className="text-xl py-2 ">Seorang Frontend Developer</h2>

            <Link href="/about">
              <button className="p-3 bg-gray-600 hover:bg-gray-500 text-white rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Get Started
              </button>
            </Link>
          </div>
          <Image
            src={me}
            alt="gambar"
            className=" h-50 w-50 object-scale-down rounded-full md:w-[300px] md:h-[450px] dark:border-2"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
