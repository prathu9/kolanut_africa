import Image from "next/image";
import { Inter } from "next/font/google";
import Accordion from "@/components/accordion/accordion";

const inter = Inter({ subsets: ["latin"] });

const faq = [
  {
    title: "What’s Kolanut?",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
  {
    title: "How does Kolanut works?",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
  {
    title: "What type of home insurance policy is available?",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
  {
    title: "How much does it cost me to insure my home?",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
  {
    title: "How can I make a claim?",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
  {
    title: "What information do I need to provide for insurance?",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
  {
    title: "How long does it take for my insurance confirmation",
    description:
      "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[1920px]">
      <div className="mb-[120px] px-4 flex flex-wrap md:gap-8 md:px-20 md:flex-nowrap md:mb-[192px]">
        <div className="w-full mt-[88.17px] font-semibold text-custom-grey lg:w-[608px] text-center md:mt-[116px] md:text-left">
          <h1 className="text-3xl leading-[36px] md:text-5xl md:leading-[57.6px]">
            Home insurance policy tailored for everyone
          </h1>
          <p className="text-base leading-[23.2px] mt-6 mb-12 font-[400] lg:text-lg lg:leading-[26.1px]">
            Whether you prefer to buy online or want expert guidance, Kolanut
            makes it easy to find your perfect home policy. The Cheapest home
            Insurance Deals at your Fingertips
          </p>
          <button className="bg-custom-red text-slate-100 text-lg leading-[26.1px] rounded-xl px-6 py-3">
            Get Instant Quote
          </button>
          <p className="mt-8 max-w-[499px] px-4 py-2 text-base leading-[26.1px] font-normal text-custom-red bg-[#FEF0F1] md:text-lg md:mt-[76px]">
            Save up to N100,000 by comparing quotes from the top 10+ insurance
            Companies
          </p>
        </div>
        <div className="mt-[44px] mx-6 rounded-3xl overflow-hidden md:mt-[109.6px]">
          <Image
            src="/homepage/cover-1.png"
            width={632}
            height={491}
            alt="cover"
            className="rounded-3xl"
          />
        </div>
      </div>
      <div className="relative max-w-[1920px] h-[359px] flex justify-center items-center overflow-hidden">
        <Image
          className="absolute overflow-visible left-[-82%] w-[1670px] h-[359px] object-cover sm:left-[0%]"
          width={0}
          height={0}
          src="/homepage/wave-vector.svg"
          alt="wave"
        />
        <div className="relative z-10">
          <h2 className="mb-[54px] text-[#FAFBFF] text-center text-base font-semibold leading-[20.16px] sm:leading-[30.24px] sm:text-2xl">
            We partner with Top Insurance companies
          </h2>
          <div className="flex gap-10 justify-center flex-wrap 2xl:gap-[176.59px]">
            <div className="relative w-[97.67px] h-[33.18px] md:w-[158.94px] md:h-[54px]">
              <Image
                src="/homepage/partner-1.svg"
                sizes="100vw"
                fill
                alt="partner"
              />
            </div>
            <div className="relative w-[186.66px] h-[33.18px] md:w-[303.76px] md:h-[54px]">
              <Image
                src="/homepage/partner-2.svg"
                sizes="100vw"
                fill
                alt="partner"
              />
            </div>
            <div className="relative w-[43.95px] h-[33.18px] md:w-[71.52px] md:h-[54px]">
              <Image
                src="/homepage/partner-3.svg"
                sizes="100vw"
                fill
                alt="partner"
              />
            </div>
            <div className="relative w-[133.96px] h-[33.18px] md:w-[218px] md:h-[54px]">
              <Image
                src="/homepage/partner-4.svg"
                wsizes="100vw"
                fill
                alt="partner"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[140.55px] pb-[44px] px-5 lg:px-24 md:pt-[300px]">
        <h2 className="mb-[33px] text-2xl leading-[50px] font-bold text-[#5B5B5B] md:mb-[74px] md:text-center md:text-[40px]">
          Why choose us?
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
          <div className="relative px-6 pt-[62px] pb-8 basis-full rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white px-[8.75px] py-[8.5px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/streamline-plump.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              Transparent & Trustworthy
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              We provide clear, unbiased information to help you make an
              informed decision without any hidden fees or charges
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-[15px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/support.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              Comprehensive Coverage Options
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              From fire and theft to natural disasters, find coverage that
              protects what matters most to you.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white px-[15px] py-[7px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/coverage.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              24/7 Support
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              Our dedicated team is here to assist you at every step of your
              insurance journey.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-[15px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/innovation.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              Innovation
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              We embrace innovation as a driving force behind our quest to
              revolutionize the home insurance industry. we continually seek new
              ways to improve the insurance experience for our customers.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[44px] mx-5 relative md:mt-[150px] md:mx-0">
        <h2 className="text-custom-grey text-2xl font-semibold leading-[50.4px] text-center md:text[40px]">
          3 Steps to safeguarding your Home
        </h2>
        <h5 className="max-w-[933px] mx-auto mt-4 text-base text-[#6C6C6C] font-normal leading-[23.2px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </h5>
        <div className="mt-[77px] mb-[32px] w-full h-[178px] aspect-ratio relative rounded-[32px] overflow-hidden md:mb-[84px] sm:h-fit">
          <Image
            className="ml-auto right-0 object-contain hidden sm:block"
            src="/homepage/bg-1.svg"
            alt="bg"
            width={1280}
            height={536}
          />
          <Image
            className="ml-auto right-0 object-contain sm:hidden sm:w-[353px] sm:h-[178px]"
            src="/homepage/bg-mobile-1.svg"
            alt="bg"
            width={353}
            height={178}
          />
        </div>
        <div className="mb-[32px] h-[181.19px] relative rounded-[32px] overflow-hidden md:mb-[84px] sm:h-fit">
          <Image
            className="ml-auto right-0 object-contain hidden sm:block"
            src="/homepage/bg-2.svg"
            alt="bg"
            width={1280}
            height={657}
          />
          <Image
            className="ml-auto right-0 object-contain sm:hidden sm:w-[353px] sm:h-[181.19px]"
            src="/homepage/bg-mobile-2.svg"
            alt="bg"
            width={353}
            height={181.19}
          />
        </div>
        <div className="mb-[32px] h-[134.58px] relative rounded-[32px] overflow-hidden md:mb-[84px] sm:h-fit">
          <Image
            className="ml-auto right-0 object-contain hidden sm:block"
            src="/homepage/bg-3.svg"
            alt="bg"
            width={1280}
            height={657}
          />
          <Image
            className="ml-auto right-0 object-contain sm:hidden sm:w-[353px] sm:h-[181.19px]"
            src="/homepage/bg-mobile-3.svg"
            alt="bg"
            width={353}
            height={134.58}
          />
        </div>
      </div>
      <div className="px-5 mt-[88.23px] mb-[88px] flex justify-between items-center gap-5 flex-wrap-reverse lg:mx-20 lg:mb-[200px] lg:mt-[300px] md:items-start">
        <div className="basis-full max-w-[581px] md:basis-2/5">
          <h2 className="mb-[24px] text-3xl font-semibold leading-[30.24px] md:leading-[50.4px] md:text-[40px]">
            On the spot assistance from expert advisors
          </h2>
          <p className="text-sm font-normal leading-[21px] md:leading-[26.1px] md:text-lg">
            Support doesn’t end after you find your best rate. We’re here to
            help whenever you need advice, from navigating claims to adjusting
            coverage after big life events.
          </p>
          <h3 className="mt-[60px] mb-[32px] text-[28px] leading-[35.8px] font-semibold">
            Supported by empathetic experts
          </h3>
          <ul>
            <li className="mb-4 flex items-center">
              <Image
                src="/homepage/list-icon-1.svg"
                width={50}
                height={50}
                alt="icon"
              />
              <span className="ml-4 text-lg leading-[26px]">
                Assisted claims experience
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <Image
                src="/homepage/list-icon-2.svg"
                width={50}
                height={50}
                alt="icon"
              />
              <span className="ml-4 text-lg leading-[26px]">24/7 Support</span>
            </li>
            <li className="mb-4 flex items-center">
              <Image
                src="/homepage/list-icon-3.svg"
                width={50}
                height={50}
                alt="icon"
              />
              <span className="ml-4 text-lg leading-[26px]">
                Highest claims NPS
              </span>
            </li>
          </ul>
        </div>
        <figure className="basis-full max-w-[635.63px] relative md:basis-[49%]">
          <div className="max-w-[635px] h-[628px] rounded-t-[35.6px] relative overflow-hidden">
            <Image
              className="absolute top-[17px] right-[41.93px] z-10"
              src="/homepage/label--inject.svg"
              width={64.7}
              height={89.5}
              alt="label"
            />
            <Image
              src="/homepage/francis-odeyemi.png"
              sizes="100%"
              style={{ objectFit: "cover" }}
              fill
              alt="person"
            />
            <figcaption className="absolute h-[105px] w-full bg-white bottom-0">
              Mariam Olushola
            </figcaption>
          </div>
        </figure>
      </div>
      <div className="pt-[49px] px-5 md:pt-[100px]">
        <h2 className="max-w-[800px] mx-auto mb-2 text-custom-grey font-semibold text-2xl leading-[30.24px] text-left md:text-[40px] md:leading-[50.4px] md:text-center">
          Protect your most Treasured Space Against Risk
        </h2>
        <p className="max-w-[656px] mx-auto text-left text-[#535763] font-normal text-sm leading-[20.3px] md:-text-center md:text-lg md:leading-[26.1px]">
          Our new suite of Home  insurance products to help you protect your
          home, furniture, and beautiful family memories.
        </p>
        <div className="flex mt-9 mb-[163px] pb-[51px] lg:ml-[80px] md:pb-[151px] md:ml-[40px] md:mt-[118px]">
          <div>
            <div className="max-w-[522px] mb-16">
              <h3 className="mb-2 text-custom-red text-2xl font-semibold leading-[28.8px]">
                Personal Properties
              </h3>
              <p className="mb-6 text-[#67696D] leading-[26.1px] font-normal">
                Safeguard your home against  losses from unforeseen events such
                as fire, theft, and natural disasters.
              </p>
            </div>
            <div className="max-w-[522px] mb-16">
              <h3 className="mb-2 text-custom-grey text-2xl font-semibold leading-[28.8px]">
                Commercial Properties
              </h3>
              <p className="mb-6 text-[#67696D] leading-[26.1px]  font-normal">
                From inventory protection to liability coverage, we ensure that
                your place of business is secure, allowing you to focus on
                serving your customers with confidence
              </p>
            </div>
            <div className="max-w-[522px] mb-16">
              <h3 className="mb-2 text-custom-grey text-2xl font-semibold leading-[28.8px]">
                Industrial Properties
              </h3>
              <p className="mb-6 text-[#67696D] leading-[26.1px]  font-normal">
                Specially crafted to provide robust protection for big
                industries and warehouses.. From equipment breakdown to
                liability risks associated with large-scale operations and
                warehousing, we guarantee you the necessary coverage to navigate
                complexities
              </p>
            </div>
            <div className="max-w-[522px] md:mb-16">
              <h3 className="mb-2 text-custom-grey text-2xl font-semibold leading-[28.8px]">
                Corporate Propertiess
              </h3>
              <p className="mb-6 text-[#67696D] leading-[26.1px] font-normal">
                From construction risks to ensuring quality standards, our
                insurance solutions are designed to support property developers
                in delivering secure and reliable homes to their client
              </p>
            </div>
            <button className="mt-8 px-6 py-3 border-2 border-custom-red text-custom-red rounded-xl md:mt-10">
              Learn more
            </button>
          </div>
          <div className="max-w-[808px] basis-2/3 relative hidden md:block">
            <Image
              className="absolute right-0"
              src="/homepage/property-1.png"
              width={594}
              height={643}
              alt="property"
            />
          </div>
        </div>
      </div>
      <div className="mt-[88px] mx-5 mb-[88px] md:pt-20 md:mt-[300px] md:mx-20 md:mb-20">
        <h2 className="mb-14 text-[40px] leading-[50.4px] font-semibold md:text-center">
          What our customers are saying about us
        </h2>
        <div>
          <div className="px-5 bg-[#FCFCFC] rounded-3xl border-[1.5px] border-[#F0F0F0] max-w-[413px] md:py-6">
            <p className="font-normal text-base leading-[23.2px] text-[#535763]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”{" "}
            </p>
            <span className="mt-6 mb-3 block font-semibold leading-[29px] text-xl text-[#535763]">
              John Doe
            </span>
            <span className="block font-normal text-[#535763] text-base leading-[23.2px]">
              Ceo of Ledger
            </span>
          </div>
        </div>
      </div>
      <div className="mx-5 flex gap-8 flex-wrap lg:gap-[125px] lg:mx-20">
        <div className="basis-full md:max-w-[575px] md:basis-[42%]">
          <h2 className="mb-2 text-custom-grey text-2xl leading-[34.8px] font-semibold md:text-5xl md:leading-[69.6px]">
            The Kolanut shield{" "}
            <span className="text-custom-red">of Honour</span>
          </h2>
          <p className="text-sm font-normal leading-[21px] text-[#535763] md:text-base md:leading-[20.16px]">
            Explore our comprehensive list of real estate partners offering
            complete coverage on housing options
          </p>
        </div>
        <div className="flex flex-wrap gap-x-20 gap-y-6 basis-full md:max-w-[537px] md:basis-[42%]">
          <div>
            <Image
             className="hidden md:block"
              src="/homepage/partner-1.png"
              width={220.75}
              height={75}
              alt="partner"
            />
            <Image
            className="block md:hidden"
              src="/homepage/partner-1.png"
              width={143.36}
              height={48.71}
              alt="partner"
            />
          </div>
          <div>
            <Image
             className="hidden md:block"
              src="/homepage/partner-2.png"
              width={99.33}
              height={75}
              alt="partner"
            />
             <Image
             className="block md:hidden"
              src="/homepage/partner-2.png"
              width={64.51}
              height={48.71}
              alt="partner"
            />
          </div>
          <div>
            <Image
             className="hidden md:block"
              src="/homepage/partner-3.png"
              width={75}
              height={75}
              alt="partner"
            />
            <Image
            className="block md:hidden"
              src="/homepage/partner-3.png"
              width={48.71}
              height={48.71}
              alt="partner"
            />
          </div>
          <div>
            <Image
            className="hidden md:block"
              src="/homepage/partner-4.png"
              width={302.78}
              height={75}
              alt="partner"
            /><Image
            className="block md:hidden"
            src="/homepage/partner-4.png"
            width={196.63}
            height={48.71}
            alt="partner"
          />
          </div>
        </div>
      </div>
      <div className="mt-[98.59px] mx-5 xl:px-24 md:mx-20 md:pt-[120px] md:mt-[300px] md:pb-[118px]">
        <div className="mb-9 flex justify-between md:mb-20">
          <h2 className="text-2xl leading-[30.24px] font-bold text-[#444444]md:text-[40px] md:leading-[50.4px]">
            News and updates
          </h2>
          <span className="hidden gap-3.5 text-[21px] leading-[26.46px] text-[#444444] font-semibold md:flex">
            View All
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_1214_7258"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1214_7258)">
                <path
                  d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </span>
        </div>
        <div className="flex gap-12 flex-wrap justify-center md:justify-start md:flex-nowrap md:gap-6">
          <div className="max-w-[352px] basis-full md:basis-[33%] md:max-w-[400px]">
            <div className="relative w-full h-[226px] rounded-[20px] md:h-[254px]">
              <Image src="/homepage/blog-1.png" sizes="100%" fill alt="blog" />
            </div>
            <h3
              className={`${inter.className} mt-4 mb-2 font-semibold text-base leading-[19.36px] text-[#444444] md:text-2xl md:leading-[29.05px] md:mb-8`}
            >
              Tips for lowering your home Insurance premiums
            </h3>
            <span className="flex gap-2 items-center text-sm font-normal leading-[17.64px]">
              4mins read{" "}
              <svg
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#5B5B5B" />
              </svg>{" "}
              3/19/2024
            </span>
          </div>
          <div className="max-w-[352px] basis-full md:basis-[33%] md:max-w-[400px]">
            <div  className="relative w-full h-[226px] rounded-[20px] md:h-[254px]">
              <Image src="/homepage/blog-2.png" sizes="100%" fill alt="blog" />
            </div>
            <h3
              className={`${inter.className} mt-4 mb-2 font-semibold text-base leading-[19.36px] text-[#444444] md:text-2xl md:leading-[29.05px] md:mb-8`}
            >
              The Benefits of Bundling Insurance Policies
            </h3>
            <span className="flex gap-2 items-center text-sm font-normal leading-[17.64px]">
              4mins read{" "}
              <svg
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#5B5B5B" />
              </svg>{" "}
              3/19/2024
            </span>
          </div>
          <div className="max-w-[352px] basis-full md:basis-[33%] md:max-w-[400px]">
            <div  className="relative w-full h-[226px] rounded-[20px] md:h-[254px]">
              <Image src="/homepage/blog-3.png" sizes="100%" fill alt="blog" />
            </div>
            <h3
              className={`${inter.className} mt-4 mb-2 font-semibold text-base leading-[19.36px] text-[#444444] md:text-2xl md:leading-[29.05px] md:mb-8`}
            >
              Preparing your home for the Rainy season
            </h3>
            <span className="flex gap-2 items-center text-sm font-normal leading-[17.64px]">
              4mins read{" "}
              <svg
                width="5"
                height="6"
                viewBox="0 0 5 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#5B5B5B" />
              </svg>{" "}
              3/19/2024
            </span>
          </div>
        </div>
      </div>
      <div className="mx-5 my-[88px] pt-[54px] lg:mx-[258px] md:mt-[238px] md:mb-[300px] md:mx-20 md:pt-[54px] md:pb-20">
        <h2 className="mb-2 text-custom-grey text-2xl leading-[30.24px] font-semibold md:leading-[50.4px] md:text-[40px] md:text-center">
          Frequently asked questions
        </h2>
        <p className="mb-10 max-w-[656px] text-base leading-[21px] font-normal text-[#535763] md:text-lg md:leading-[26.1px] md:text-center md:m-auto">
          You have questions?we have answers to all your questions and if you
          can’t find an answer to your question here, contact us.
        </p>
        <Accordion accordionItems={faq} />
      </div>
    </main>
  );
}
