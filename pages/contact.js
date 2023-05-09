import { IoLocationSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import ToogleTheme from "./toggleTheme";
import Layout from "./layout";

function Contact() {
  return (
    <Layout>
      <section className="m-10 md:mx-20">
        <ToogleTheme />
        <div className="z-20 text-xl max-w-screen-xl flex items-center justify-between">
          <div>
            <Link href="/resume">
              <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                <GrLinkPrevious />
              </button>
            </Link>
          </div>
        </div>
        <h1 className="text-3xl font-medium mb-14 text-center">Contact Me</h1>
        <div className="gap-6 flex h-full flex-wrap items-center justify-around ">
          <div className="md:w-[50%]">
            <form action="mailto:guidodikafirguston@gmail.com" method="GET">
              <div className="grid grid-cols-2 gap-5 pb-5 md:pb-10">
                <div className="flex flex-col">
                  <label>Nama Depan</label>
                  <input
                    type="text"
                    className="border-b-2 border-b-black focus:outline-none md:pt-3"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Nama Belakang</label>
                  <input
                    type="text"
                    className="border-b-2 border-b-black focus:outline-none md:pt-3"
                  />
                </div>
              </div>

              <div className="flex flex-col pb-5 md:pb-10">
                <label>Email</label>
                <input
                  type="email"
                  className="border-b-2 border-b-black focus:outline-none md:pt-3"
                />
              </div>
              <div className="flex flex-col pb-10 md:pb-10">
                <label>Pesan</label>
                <input
                  type="text"
                  className="border-b-2 border-b-black focus:outline-none md:pt-3"
                />
              </div>
              <button className="bg-gray-600 hover:bg-gray-500 p-2 rounded-full text-white">
                Kirim Pesan
              </button>
            </form>
          </div>

          <div className="my-10 md:my-0">
            <h3 className="text-xl font-semibold mb-5">Contact Info</h3>
            <div className="flex flex-row items-center my-2 gap-2">
              <IoLocationSharp />
              <p>Bambanglipuro, Bantul, Daerah Istimewa Yogyakarta</p>
            </div>
            <div className="flex flex-row items-center my-2 gap-2">
              <BsWhatsapp />
              <p>089603915525</p>
            </div>
            <div className="flex flex-row items-center my-2 gap-2">
              <SiGmail />
              <p>guidodikafirguston.mail@gmail.com</p>
            </div>
            <div className="flex flex-row items-center my-2 gap-2">
              <AiFillLinkedin />
              <p>Guido Dika Firguston</p>
            </div>
            <div className="flex flex-row items-center my-2 gap-2">
              <AiFillGithub />
              <p>guidodika</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
