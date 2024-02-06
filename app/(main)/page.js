"use client";
import Image from "next/image";
import bg from "@/images/bg2.png";
import logo from "@/images/logo.png";
import icon1 from "@/images/icon1.png";
import icon2 from "@/images/icon2.png";
import icon3 from "@/images/icon3.png";
import icon4 from "@/images/icon4.png";
import icon5 from "@/images/icon5.png";

import f5 from "@/images/5.png";
import f6 from "@/images/6.png";
import f7 from "@/images/7.png";
import f8 from "@/images/8.png";
import f9 from "@/images/9.png";
import f10 from "@/images/f10.png";
import f11 from "@/images/11.png";
import f12 from "@/images/12.png";
import BottomSlider from "@/components/BottomSlider";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/reduxStore";

export default function Home() {
  const [openBottomSlider, setOpenBottomSlider] = useState(false);
  const [sliderData, setSliderData] = useState();

  const industries = [
    {
      icon: icon5,
      title: "Real estate Development",
      companies: [
        {
          logo: f5,
          link: "www.zurqui.com",
          text: "Introducing Zurqui, the real estate and development company that's transforming the way people live! With a focus on creating vibrant communities in Class B and Flex Space Warehousing markets, Zurqui is dedicated to building commercial flex space warehousing and renovating apartment complexes in neighborhoods of tomorrow. With their innovative designs, their team of experts is always pushing the boundaries of what's possible in real estate.",
        },
      ],
    },
    {
      icon: icon1,
      title: "construction",
      companies: [
        {
          logo: f6,
          link: "www.roofingsolutions.com",
          text: "With a passion for delivering top-notch services and a commitment to using only the finest materials, Roofing Solutions is dedicated to providing its clients with a seamless and stress-free experience from start to finish. From flat roofs to steep-slope, their team of highly skilled professionals has the expertise to tackle even the most challenging projects with ease. Whether you're looking to repair a leak, replace your old roof, or upgrade to the latest energy-efficient technology, this company is your trusted partner for all your commercial roofing needs.",
        },
        {
          logo: f10,
          link: "www.alusystems.com",
          text: "With a passion for precision and a commitment to using only the finest materials, Alusystems is dedicated to creating metal panel solutions that are both functional and beautiful. Their state-of-the-art fabrication facilities and skilled team of experts ensure that every panel is crafted to the highest standards, and their attention to detail is unmatched. Whether you're looking to upgrade your building's aesthetic, improve its energy efficiency, or protect it from the elements, this metal panel fabricator company has the expertise to deliver the perfect solution.",
        },
      ],
    },
    {
      icon: icon2,
      title: "outsourcing & it",
      companies: [
        {
          logo: f7,
          link: "www.linkoutsourcing.com",
          text: "With a focus on delivering exceptional services and a commitment to using cutting-edge technology, Link Outsourcing is dedicated to helping businesses reach their full potential. Whether streamline your operations, reduce costs, or access the best talent in the market, Link Outsourcing is your trusted partner. Their team of highly skilled professionals has the expertise to tackle any project with ease and ensure your success.",
        },
        {
          logo: f11,
          link: "www.itsinfocom.com",
          text: "With a passion for innovation and a commitment, ITS Infocom is dedicated to helping businesses navigate the ever-changing landscape of technology. From cloud computing to network security, their team of experts has the knowledge and expertise to design, implement, and manage the most complex IT infrastructure solutions. Whether you're looking to upgrade your systems, streamline your operations, or stay ahead of the competition, this IT infrastructure services company is your go-to partner. So why wait? Empower your business with the best in IT infrastructure solutions, contact this company today!",
        },
      ],
    },
    {
      icon: icon3,
      title: "healthcare",
      companies: [
        {
          logo: f8,
          link: "www.patologiadelcruz.com",
          text: "With a focus on providing accurate and timely results, Del Cruz Labs is the leader in surgical pathology diagnostic in Costa Rica. Our team of Pathologists is dedicated to helping physicians diagnose and treat their patients with confidence. Their state-of-the-art facilities and cutting-edge technology ensure that every test is performed with the highest level of accuracy. Their team of highly skilled professionals is committed to delivering exceptional customer service. ",
        },
        {
          logo: f12,
          link: "www.histolabscr.com",
          text: "With a commitment to using the latest technology and a team of highly skilled physicians, HistoLabs is dedicated to delivering fast and reliable results. HistoLabs is the clinical laboratory that's raising the standard for precision and accuracy in the healthcare industry in Costa Rica. From routine testing to complex analyses, their state-of-the-art facilities and rigorous quality control processes ensure that every test is performed with the utmost care.",
        },
      ],
    },
    {
      icon: icon4,
      title: "food & beverages",
      companies: [
        {
          logo: f9,
          link: "www.hooters.cr/",
          text: "With a commitment to delivering great food, cold drinks, and a fun atmosphere, Hooters franchise for Costa Rica is dedicated to providing its customers with a one-of-a-kind dining experience. With a team of friendly and engaging servers, you'll always feel right at home. Experience the fun and flavor of Hooters! Whether you're watching the game with friends, grabbing a bite on your lunch break, or celebrating a special occasion, this franchise is the place to be. At Hooters, life is better with wings!",
        },
      ],
    },
  ];

  const companies = industries.flatMap((i) =>
    i.companies.map((c) => ({ ...c, industry: i.title }))
  );

  const company = companies.find((c) => c.link === sliderData);

  const dispatch = useDispatch();

  return (
    <>
      <Image
        src={bg}
        alt=""
        className="h-auto w-screen object-cover absolute saturate-50 z-0 "
      />

      {/* for onclick */}
      <BottomSlider open={openBottomSlider} setOpen={setOpenBottomSlider}>
        {/* card */}
        <div className=" rounded-xl w-full px-0 py-0 grid md:grid-cols-3 gap-4 text-black">
          <div className="flex flex-col items-center ">
            <Image
              className=" h-44 w-auto "
              src={company?.logo || ""}
              alt="Your Company"
            />
            <Link target="_blank" href={"https://" + company?.link || ""}>
              <p>{company?.link}</p>
            </Link>
          </div>

          <div className="md:col-span-2 ">
            <div className="flex flex-row gap-3 items-center text-center my-6 md:my-0 ml-6 md:ml-0">
              <p>
                <span className="font-bold text-lg uppercase">
                  {company?.industry}
                </span>{" "}
                <br />
                INDUSTRY
              </p>
              <Image
                className=" h-20 w-auto "
                src={
                  industries?.find((i) => i?.title === company?.industry)
                    ?.icon || ""
                }
                alt="Your Company"
              />
            </div>

            <p>{company?.text}</p>
          </div>
        </div>
      </BottomSlider>

      <div className="relative flex min-h-full w-screen flex-1 flex-col px-6 py-0 lg:px-8 z-10 ">
        <button
          onClick={() => dispatch(authActions.logout())}
          className="absolute top-4 right-4 z-50 bg-[rgb(255,255,255,0.4)] text-white px-3 py-1 rounded-md flex flex-row items-center justify-center gap-2 border border-white"
        >
          Log out
        </button>

        <div className="sm:mx-auto sm:w-full ">
          {/* logo */}
          <Image
            className="mx-auto h-32 md:h-52 w-auto"
            src={logo}
            alt="Your Company"
          />
          {/* description */}
          <p className="text-center text-white mt-24 md:mt-52 text-lg md:text-nowrap">
            <b>Knight Holdings</b> is a diversified INVESTMENT FIRM <br />
            with a focus on{" "}
            <span className="text-gray-600 font-medium">5 industries:</span>
          </p>

          {/* industries container */}
          <div className="mt-16 flex flex-row gap-4 overflow-scroll w-screen">
            {industries.map((i, k) => (
              <div key={k} className="flex flex-col items-center pb-16">
                <Image
                  className="mx-auto h-28 w-auto"
                  src={i.icon}
                  alt="Your Company"
                />
                <p className="font-bold uppercase text-white ">{i.title}</p>

                <div className="mt-8  w-0 h-0  border-l-[2.5px] border-l-transparent border-t-[50px] border-t-white border-r-[2.5px] border-r-transparent"></div>
                {i.companies.map((c, k) => (
                  <div
                    className="w-64 h-24  rounded-full border-b-2  border-b-white cursor-pointer hover:opacity-100 ease-linear duration-200 opacity-20 mt-10 relative "
                    key={k}
                    onClick={() => {
                      setOpenBottomSlider(true);
                      setSliderData(c.link);
                    }}
                  >
                    <Image
                      className="mx-auto h-32 w-auto absolute -top-4"
                      src={c.logo}
                      alt="Your Company"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* texts */}
          <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-24 md:px-16 pb-16 mt-12">
            <p>
              Our <b>TEAM</b> of experienced professionals has a proven track
              record of success in identifying and investing in high-growth
              opportunities in these sectors. We take a hands-on approach to
              managing our investments, working closely with management teams to
              help companies reach their full potential.
            </p>
            <p>
              We strive to scale and create <b>LONG-TERM VALUE</b> for out
              investors and partners. We are committed to building a{" "}
              <b>STRONG REPUTATION</b> for integrity and excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
