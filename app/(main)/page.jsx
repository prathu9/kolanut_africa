"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Accordion from "@/components/accordion/accordion";
import CoverSwiper from "./_component/cover-swiper";
import PropertyRiskManagement from "./_component/property-risk-management";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const faq = [
  {
    title: "What’s Kolanut?",
    description:
      "Kolanut Global Investment and Technologies Limited also known as Kolanut Africa is a digital platform that serves as a bridge between homeowners and insurance companies, with a primary focus on transparency and simplicity",
  },
  {
    title: "What type of home insurance policy is available?",
    description: (
      <div className="text-12 leading-[26.1px] font-semibold">
        <p className="mt-5">
          a. Fire And Special Perils Insurance — The Policy covers loss or
          damage caused by fire and other insured perils such as Lightning,
          Domestic Explosion, Aircraft and articles dropped from their Impact
          damage due to rail/road or animal, Riot strike, malicious and
          terrorism damage, Subsidence and Landslide (including rockslide),
          Natural disasters including storms, floods, Damage caused by sprinkler
          leakage, overflow, leakage of water tanks, pipes, etc.  The basic fire
          policy is limited in its scope, but the following  important perils
          known as special perils can be added for  adequate protection of your
          assets at a very reasonable cost:
        </p>
        <ul className="my-5">
          <li>▪ Storm, impact, or flood</li>
          <li>▪ Burst pipes, earthquakes, aircraft.</li>
          <li>▪ Riot, civil commotion</li>
          <li>▪ Machine damage</li>
          <li>▪ Explosion</li>
          <li>▪ Impact</li>
        </ul>
        <p className="mb-5">
          b. Burglary Housebreaking Policy — The policy is designed for business
          premises and covers a stock in trade, goods held in trust or on
          commission, fixtures & fittings, and utensils of trade.
        </p>
        <p className="mb-5">
          c. All Risks Insurance — This provides cover for the insured
          properties against “All Risks” of direct physical loss or damage from
          any accidental cause to the insured plant and equipment. 
        </p>
        <div>
          d. Construction All Risk (CAR) Insurance - This policy is designed to
          cover property damage and third-party injury or damage claims on
          construction projects. Let’s dive into the details:
          <br />
          1. What Does CAR Insurance Cover?
          <ul className="list-disc list-inside">
            <li>
              Property Damage: This includes improper construction of
              structures, damage during renovations,
            </li>
            <li>and harm to temporary work erected on-site.</li>
            <li>
              Third-Party Injury or Damage Claims: Subcontractors and other
              parties working at the construction
            </li>
            <li>site may suffer injuries or cause damage</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How much does it cost me to insure my home?",
    description:
      "Depends on the cost of your property and the coverages you want to undertake",
  },
  {
    title: "How can I make a claim?",
    description:
      "Notify your provider(kolanut Africa), fill the claim form, provide the necessary docs - a police report, the repair estimate of the damaged building, statement of guards on duty, stocks record, pictures taken at the scene of the incidence, receipts of stolen items)",
  },
  {
    title: "What information do I need to provide for insurance?",
    description:
      "Worth of your property, coverages you want to undertake, period of cover, type of your property (Residential Buildings (Single and multi-units), Retail Spaces (Shops, Office Spaces) ,Industrial Buildings (Warehouses and Factories) and any other supporting docs",
  },
  {
    title: "How long does it take for my insurance confirmation",
    description:
      " Immediately premium is remitted and confirmed and all supporting document provided",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[1920px] overflow-x-hidden">
      <div className="mb-[120px] px-4 flex flex-wrap justify-center md:gap-8 md:px-20 lg:flex-nowrap md:mb-[160px]">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="basis-[full] mt-[88.17px] font-semibold text-custom-grey lg:basis-[40%] text-center md:mt-[116px] md:text-left"
        >
          <h1 className="text-3xl leading-[36px] md:text-5xl md:leading-[57.6px]">
            Home insurance policy tailored for everyone
          </h1>
          <p className="max-w-[540px] text-base leading-[23.2px] mt-6 mb-12 font-[400] lg:text-lg lg:leading-[26.1px]">
            Whether you prefer to buy online or want expert guidance, Kolanut
            makes it easy to find your perfect home policy. The Cheapest home
            Insurance Deals at your Fingertips
          </p>
          <button className="bg-custom-red text-slate-100 text-lg leading-[26.1px] rounded-xl px-6 py-3">
            Get Instant Quote
          </button>
          <p className="mt-8 max-w-[499px] px-4 py-2 text-base leading-[26.1px] font-normal text-custom-red bg-[#FEF0F1] rounded-xl md:text-lg md:mt-[76px]">
            Save up to N100,000 by comparing quotes from the top 10+ insurance
            Companies
          </p>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="mt-[44px] mx-6 basis-full aspect-[1.28] rounded-3xl overflow-hidden lg:basis-[40%] md:mt-[109.6px]"
        >
          <CoverSwiper />
        </motion.div>
      </div>
      <div className="relative max-w-[1920px] h-[280px] px-5 py-5 flex items-center justify-center overflow-hidden box-content md:h-[420px] md:px-10 md:justify-center md:items-stretch md:flex-col">
        <Image
          className="absolute overflow-visible -left-[63%] w-[1920px] h-[300px] object-cover sm:left-[0%]"
          width={0}
          height={0}
          src="/homepage/wave-vector.svg"
          alt="wave"
        />
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="relative z-10"
        >
          <h2 className="mb-[54px] text-[#FAFBFF] text-center text-base font-semibold leading-[20.16px] sm:leading-[30.24px] sm:text-2xl">
            We partner with Top Insurance companies
          </h2>
          <div className="w-full flex flex-wrap gap-5 md:justify-between">
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
        </motion.div>
      </div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, type: "spring" }}
        className="pt-[140.55px] pb-[44px] px-5 lg:px-24 md:pt-[200px] md:pb-[54px]"
      >
        <h2 className="mb-[33px] text-2xl leading-[50px] font-bold text-[#5B5B5B] md:mb-[74px] md:text-center md:text-[40px]">
          Why choose us?
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
          <div className="relative px-6 pt-[62px] pb-8 basis-full rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image
                  src="/homepage/streamline-plump.svg"
                  className="object-contain"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              Transparent & Trustworthy
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              We provide clear, unbiased information to help you make an
              informed decision without any hidden fees or charges
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image
                  src="/homepage/support.svg"
                  className="object-contain"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              Comprehensive Coverage Options
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              From fire and theft to natural disasters, find coverage that
              protects what matters most to you.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image
                  src="/homepage/coverage.svg"
                  className="object-contain"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              24/7 Support
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              Our dedicated team is here to assist you at every step of your
              insurance journey.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image
                  src="/homepage/innovation.svg"
                  className="object-contain"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey md:text-[21px]">
              Innovation
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              We embrace innovation as a driving force behind our quest to
              revolutionize the home insurance industry. we continually seek new
              ways to improve the insurance experience for our customers.
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mt-[44px] mx-5 relative md:mt-[200px] md:mx-0 lg:mx-20">
        <h2 className="text-custom-grey text-2xl font-semibold leading-[30.24px] md:text-center md:text-[40px] md:leading-[50.4px]">
          3 Steps to safeguarding your Home
        </h2>
        <h5 className="max-w-[933px] mx-auto mt-4 text-sm leading-[20.3px] text-[#6C6C6C] font-normal md:text-base md:leading-[23.2px] md:text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </h5>
        <div className="mt-[68px] mb-[32px]  w-full aspect-[2.3] relative rounded-[32px] overflow-hidden md:mt[77px] md:mb-[84px]">
          <Image
            className="right-0 object-contain"
            src="/homepage/bg-1.svg"
            alt="bg"
            sizes="100vw"
            fill
          />
        </div>
        <div className="mb-[32px] w-full aspect-[1.95]  relative rounded-[32px] overflow-hidden md:mb-[84px]">
          <Image
            className="right-0 object-contain"
            src="/homepage/bg-2.svg"
            alt="bg"
            sizes="100vw"
            fill
          />
        </div>
        <div className="mb-[32px] w-full aspect-[2.62] relative rounded-[32px] overflow-hidden md:mb-[84px]">
          <Image
            className="right-0 object-contain"
            src="/homepage/bg-3.svg"
            alt="bg"
            sizes="100vw"
            fill
          />
        </div>
      </div>
      <div className="px-5 mt-[88.23px] mb-[88px] flex items-center justify-between gap-[63px] flex-wrap lg:mx-20 lg:mb-[200px] lg:mt-[200px] md:items-start">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, type: "spring" }}
          className="basis-full md:basis-2/5"
        >
          <h2 className="mb-[24px] text-2xl text-center font-semibold leading-[30.24px] md:leading-[50.4px] md:text-[40px] md:text-left">
            On the spot assistance from expert advisors
          </h2>
          <p className="mb-10 text-sm font-normal leading-[21px] md:leading-[26.1px] md:mt-0 md:text-lg">
            Support doesn’t end after you find your best rate. We’re here to
            help whenever you need advice, from navigating claims to adjusting
            coverage after big life events.
          </p>
          <figure className="basis-full aspect-square relative md:basis-[45%] block md:hidden">
            <div className="aspect-square rounded-t-[35.6px] relative overflow-hidden">
              <Image
                className="absolute top-[17px] right-[41.93px] z-10"
                src="/homepage/label--inject.svg"
                width={35.95}
                height={49.74}
                alt="label"
              />
              <Image
                src="/homepage/francis-odeyemi.png"
                sizes="100%"
                style={{ objectFit: "cover" }}
                fill
                alt="person"
              />
              <figcaption className="pt-[14px] flex flex-col items-center absolute h-[58px] w-full bg-white bottom-0 md:h-[105px]">
                <h5 className="text-sm leading-[17.64px] font-medium text-custom-grey text-center md:text-2xl md:leading-[30.24px]">
                  Mariam Olushola
                </h5>
                <ul className="mt-[10.17px] ml-10 text-[10px] leading-[12.8px] font-normal text-[#535763] flex gap-[13.34px] md:text-base md:leading-[20.16px] md:gap-6">
                  <li>Licensed Agent</li>
                  <li className="list-disc ml-6">4+ years</li>
                </ul>
              </figcaption>
            </div>
          </figure>
          <h3 className="mt-[60px] mb-[32px] text-lg leading-[22.68px] text-custom-grey font-semibold md:text-[28px] md:leading-[35.8px]">
            Supported by empathetic experts
          </h3>
          <ul>
            <li className="mb-4 flex items-center">
              <div className="relative w-10 h-10 md:w-[50px] md:h-[50px]">
                <Image
                  src="/homepage/list-icon-1.svg"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>

              <span className="ml-4 text-sm leading-[26px] md:text-lg md:leading-[26px]">
                Assisted claims experience
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <div className="relative w-10 h-10 md:w-[50px] md:h-[50px]">
                <Image
                  src="/homepage/list-icon-2.svg"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>

              <span className="ml-4 text-sm leading-[26px] md:text-lg md:leading-[26px]">
                24/7 Support
              </span>
            </li>
            <li className="mb-4 flex items-center">
              <div className="relative w-10 h-10 md:w-[50px] md:h-[50px]">
                <Image
                  src="/homepage/list-icon-3.svg"
                  sizes="100vw"
                  fill
                  alt="icon"
                />
              </div>

              <span className="ml-4 text-sm leading-[26px] md:text-lg md:leading-[26px]">
                Highest claims NPS
              </span>
            </li>
          </ul>
        </motion.div>
        <figure className="basis-full  relative md:basis-[45%] hidden md:block">
          <div className="aspect-square rounded-t-[35.6px] relative overflow-hidden">
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
            <figcaption className="pt-[14px] flex flex-col items-center absolute h-[105px] w-full bg-white bottom-0">
              <h5 className="text-sm leading-[17.64px] font-medium text-custom-grey text-center md:text-2xl md:leading-[30.24px]">
                Mariam Olushola
              </h5>
              <ul className="mt-[10.17px] ml-10 text-[10px] leading-[12.8px] font-normal text-[#535763] flex gap-[13.34px] md:text-base md:leading-[20.16px] md:gap-6">
                <li>Licensed Agent</li>
                <li className="list-disc ml-6">4+ years</li>
              </ul>
            </figcaption>
          </div>
        </figure>
      </div>
      <div className="pt-[49px] px-5 md:pt-[100px] bg-gradient-1">
        <motion.div
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
        >
          <h2 className="max-w-[800px] mx-auto mb-2 text-custom-grey font-semibold text-2xl leading-[30.24px] text-left md:text-[40px] md:leading-[50.4px] md:text-center">
            Protect your most Treasured Space Against Risk
          </h2>
          <p className="max-w-[656px] mx-auto text-left text-[#535763] font-normal text-sm leading-[20.3px] md:text-center md:text-lg md:leading-[26.1px]">
            Our new suite of Home  insurance products to help you protect your
            home, furniture, and beautiful family memories.
          </p>
          <PropertyRiskManagement />
        </motion.div>
      </div>
      <div className="mt-[88px] mx-5 mb-[88px] md:pt-20 md:mt-[200px] md:mx-20 md:mb-20">
        <h2 className="mb-8 text-2xl leading-[30.24px] font-semibold md:mb-14 md:text-center md:text-[40px] md:leading-[50.4px]">
          What our customers are saying about us
        </h2>
        <div className="flex gap-[36px] justify-center flex-wrap md:flex-nowrap">
          <div className="px-5 py-6 bg-[#FCFCFC] rounded-3xl border-[1.5px] border-[#F0F0F0] max-w-[413px] h-fit md:py-6">
            <p className="font-normal text-sm leading-[20.3px] text-[#535763] md:text-base md:leading-[23.2px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”{" "}
            </p>
            <span className="mt-6 mb-3 block font-semibold text-base leading-[23.2px] text-[#535763] md:leading-[29px] md:text-xl">
              John Doe
            </span>
            <span className="block font-normal text-[#535763] text-sm leading-[20.3px] md:text-base md:leading-[23.2px]">
              Ceo of Ledger
            </span>
          </div>
          <div className="px-5 py-6 bg-[#FCFCFC] rounded-3xl border-[1.5px] border-[#F0F0F0] max-w-[413px] md:py-6">
            <p className="font-normal text-sm leading-[20.3px] text-[#535763] md:text-base md:leading-[23.2px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”{" "}
            </p>
            <span className="mt-6 mb-3 block font-semibold text-base leading-[23.2px] text-[#535763] md:leading-[29px] md:text-xl">
              John Doe
            </span>
            <span className="block font-normal text-[#535763] text-sm leading-[20.3px] md:text-base md:leading-[23.2px]">
              Ceo of Ledger
            </span>
          </div>
          <div className="px-5 py-6 bg-[#FCFCFC] rounded-3xl border-[1.5px] border-[#F0F0F0] max-w-[413px] md:py-6">
            <p className="font-normal text-sm leading-[20.3px] text-[#535763] md:text-base md:leading-[23.2px]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam”{" "}
            </p>
            <span className="mt-6 mb-3 block font-semibold text-base leading-[23.2px] text-[#535763] md:leading-[29px] md:text-xl">
              John Doe
            </span>
            <span className="block font-normal text-[#535763] text-sm leading-[20.3px] md:text-base md:leading-[23.2px]">
              Ceo of Ledger
            </span>
          </div>
        </div>
      </div>
      <div className="mx-5 flex gap-8 flex-wrap justify-center md:mt-[200px] lg:gap-[125px] lg:mx-20">
        <motion.div
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="basis-full md:max-w-[575px] md:basis-[42%]"
        >
          <h2 className="mb-2 text-custom-grey text-2xl leading-[34.8px] font-semibold md:text-5xl md:leading-[69.6px]">
            The Kolanut shield{" "}
            <span className="text-custom-red">of Honour</span>
          </h2>
          <p className="text-sm font-normal leading-[21px] text-[#535763] md:text-base md:leading-[20.16px]">
            Explore our comprehensive list of real estate partners offering
            complete coverage on housing options
          </p>
        </motion.div>
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
            />
            <Image
              className="block md:hidden"
              src="/homepage/partner-4.png"
              width={196.63}
              height={48.71}
              alt="partner"
            />
          </div>
        </div>
      </div>
      <div className="mt-[98.59px] mx-5 md:mx-20 md:pt-[120px] md:mt-[194px] md:pb-[118px] xl:px-24">
        <div className="max-w-[1248px] mx-auto mb-9 flex justify-between md:mb-20">
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
        <div className="flex gap-12 flex-wrap justify-center md:justify-center md:flex-nowrap md:gap-6">
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
            <div className="relative w-full h-[226px] rounded-[20px] md:h-[254px]">
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
            <div className="relative w-full h-[226px] rounded-[20px] md:h-[254px]">
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
      <div className="mx-5 my-[88px] pt-[54px] lg:mx-[258px] md:mt-[200px] md:mb-[207px] md:mx-20 md:pt-[54px] md:pb-20">
        <h2 className="mb-2 text-custom-grey text-2xl leading-[30.24px] font-semibold md:mb-10 md:leading-[50.4px] md:text-[40px] md:text-center">
          Frequently asked questions
        </h2>
        <p className="mb-10 max-w-[656px] text-sm leading-[21px] font-normal text-[#535763] md:text-lg md:leading-[26.1px] md:text-center md:m-auto">
          You have questions?we have answers to all your questions and if you
          can’t find an answer to your question here, contact us.
        </p>
        <Accordion accordionItems={faq} />
      </div>
    </main>
  );
}
