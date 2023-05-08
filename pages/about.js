import Image from "next/image";
import me from "/public/dev-ed-wave.png";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiTailwindcss, SiKotlin } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import Link from "next/link";
import ToogleTheme from "./toggleTheme";
import Layout from "./layout";

function About() {
  return (
    <Layout>
      <section className="m-10 md:mx-20">
        <ToogleTheme />
        <div>
          <div className="z-20 text-xl max-w-screen-xl flex items-center justify-between mb-5">
            <div>
              <Link href="/">
                <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                  <GrLinkPrevious />
                </button>
              </Link>
            </div>
            <div>
              <Link href="/portfolio">
                <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                  <GrLinkNext />
                </button>
              </Link>
            </div>
          </div>

          <h1 className="text-3xl font-medium">About</h1>
          <p className="py-5 text-gray-500">
            Mempunyai pengalaman selama kurang lebih 1 tahun dalam pengembangan
            aplikasi mobile sebagai frontend developer. Familiar dengan HTML,
            CSS, Javascript dan beberapa library seperti jQuery, Bootstrap dan
            React JS. Saya terbuka untuk tawaran pekerjaan sebagai Frontend
            Developer .
          </p>
          <div className="grid">
            <div className="grid grid-rows-4 grid-flow-col gap-4 my-5">
              <div>
                <span className="flex items-center gap-2">
                  <AiFillHtml5 className="text-2xl" />
                  <h3 className="text-xl pb-2">HTML</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]">
                    menengah
                  </div>
                </div>
              </div>

              <div>
                <span className="flex items-center gap-2">
                  <DiCss3 className="text-2xl" />
                  <h3 className="text-xl pb-2">CSS</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%] ">
                    menengah
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <IoLogoJavascript className="text-2xl" />
                  <h3 className="text-xl pb-2">Javascript</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]">
                    menengah
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <DiReact className="text-2xl" />
                  <h3 className="text-xl pb-2">React JS</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]">
                    menengah
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <SiNextdotjs className="text-2xl" />
                  <h3 className="text-xl pb-2">Next JS</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]">
                    menengah
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <SiTailwindcss className="text-2xl" />
                  <h3 className="text-xl pb-2">Tailwind CSS</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[50%]">
                    menengah
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <SiKotlin className="text-2xl" />
                  <h3 className="text-xl pb-2">Kotlin</h3>
                </span>

                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[75%]">
                    pengalaman 1 tahun
                  </div>
                </div>
              </div>
              <div>
                <span className="flex items-center gap-2">
                  <BsGit className="text-2xl" />
                  <h3 className="text-xl pb-2">Git</h3>
                </span>
                <div class="w-full bg-gray-200 rounded-full dark:border-white dark:border-2">
                  <div class="bg-gray-800 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[75%]">
                    pengalaman
                  </div>
                </div>
              </div>
            </div>
            <div className="flex py-5 justify-center gap-10">
              <a
                href="https://api.whatsapp.com/send?phone=6289603915525"
                target="_blank"
              >
                <button className="bg-gray-600 p-5 rounded-full text-white">
                  Hire Me
                </button>
              </a>
              <a href="cv-guidodika.pdf" download>
                <button className="bg-gray-600 p-5 rounded-full text-white">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
