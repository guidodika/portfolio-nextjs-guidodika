import Image from "next/image";
import web1 from "/public/web-1.png";
import web2 from "/public/web-2.png";
import web3 from "/public/web-3.png";
import web4 from "/public/web-4.png";
import web5 from "/public/web-5.png";
import web6 from "/public/web-6.png";
import Link from "next/link";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import ToogleTheme from "./toggleTheme";
import Layout from "./layout";

function Portfolio() {
  return (
    <Layout>
      <section className="m-10 md:mx-20">
        <ToogleTheme />
        <div className="z-20 text-xl max-w-screen-xl flex items-center justify-between">
          <div>
            <Link href="/about">
              <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                <GrLinkPrevious />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/resume">
              <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                <GrLinkNext />
              </button>
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-medium text-center">Portfolio</h1>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              alt="gambar"
              className="rounded-lg object-cover border-[10px] border-gray-300 w-[100%] h-[100%]"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              alt="gambar"
              className="rounded-lg object-cover border-[10px] border-gray-300 w-[100%] h-[100%]"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              alt="gambar"
              className="rounded-lg object-cover border-[10px] border-gray-300 w-[100%] h-[100%]"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              alt="gambar"
              className="rounded-lg object-cover border-[10px] border-gray-300 w-[100%] h-[100%]"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              alt="gambar"
              className="rounded-lg object-cover border-[10px] border-gray-300 w-[100%] h-[100%]"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              alt="gambar"
              className="rounded-lg object-cover border-[10px] border-gray-300 w-[100%] h-[100%]"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Portfolio;
