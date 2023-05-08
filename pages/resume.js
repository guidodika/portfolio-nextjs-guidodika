import Image from "next/image";
import me from "/public/image-guidodika2.png";
import { HiBuildingOffice } from "react-icons/hi2";
import { BsGlobeAsiaAustralia, BsFillCalendarEventFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import Link from "next/link";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import ToogleTheme from "./toggleTheme";
import Layout from "./layout";

function Resume() {
  return (
    <Layout>
      <section className="m-10 md:mx-20">
        <ToogleTheme />
        <div className="z-20 text-xl max-w-screen-xl flex items-center justify-between">
          <div>
            <Link href="/portfolio">
              <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                <GrLinkPrevious />
              </button>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <button className="p-2 bg-gray-300 text-gray-900 rounded-full opacity-30 hover:opacity-80">
                <GrLinkNext />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="text-3xl font-medium py-5">Resume</h1>
            <div>
              <div>
                <div>
                  <h3 className="text-xl font-medium py-5">Pengalaman Kerja</h3>
                </div>
                <div className="flex flex-col md:flex-row gap-5 border-2 p-5 md:border-none md:p-0 md:gap-20 py-3">
                  <div className="flex flex-col">
                    <p>Frontend Developer</p>
                    <div className="flex flex-row gap-10 py-1">
                      <span className="flex items-center gap-2">
                        <HiBuildingOffice className="hidden md:block" />
                        <h3>PT. Infosys Solusi Terpadu</h3>
                      </span>
                      <span className="flex items-center gap-2">
                        <BsGlobeAsiaAustralia className="hidden md:block" />
                        <p>Yogyakarta</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="bg-teal-100 rounded-lg text-center p-1 md:ml-auto w-fit">
                      FULLTIME
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <BsFillCalendarEventFill className="hidden md:block" />
                      <p>Februari 2022 - Januari 2023</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium py-5">Pendidikan</h3>
                </div>
                <div className="flex justify-between py-3 border-b-2">
                  <div className="flex flex-col">
                    <p>Sarjana S1 Informatika</p>
                    <div className="flex flex-col md:flex-row md:gap-10 py-1 ">
                      <span className="flex items-center gap-2">
                        <IoIosSchool className="hidden md:block" />
                        <p>Universitas Sanata Dharma</p>
                      </span>
                      <span className="flex items-center gap-2">
                        <BsGlobeAsiaAustralia className="hidden md:block" />
                        <p>Yogyakarta</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <BsFillCalendarEventFill className="hidden md:block" />
                    <p>2017 - 2021</p>
                  </div>
                </div>
                <div className="flex justify-between py-3 border-b-2">
                  <div className="flex flex-col">
                    <p>Sekolah Menengah Atas</p>
                    <div className="flex flex-col md:flex-row md:gap-10 py-1">
                      <span className="flex items-center gap-2">
                        <FaSchool className="hidden md:block" />
                        <p>SMA Stella Duce Bantul</p>
                      </span>
                      <span className="flex items-center gap-2">
                        <BsGlobeAsiaAustralia className="hidden md:block" />
                        <p>Kabupaten Bantul</p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <BsFillCalendarEventFill className="hidden md:block" />
                    <p>2014 - 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 h-50 mt-10 md:mt-0 bg-gray-200 border-2 rounded-full md:h-[30%] md:w-[30%]">
            <Image src={me} alt="gambar" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Resume;
