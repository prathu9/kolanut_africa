import Image from "next/image";
import { Inter } from "next/font/google";
import Accordion from "@/components/accordion/accordion";

const inter = Inter({ subsets: ["latin"] });

const faq = [
  {
    title: "What’s Kolanut?",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  },
  {
    title: "How does Kolanut works?",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  },
  {
    title: "What type of home insurance policy is available?",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  },
  {
    title: "How much does it cost me to insure my home?",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  },
  {
    title: "How can I make a claim?",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  },
  {
    title: "What information do I need to provide for insurance?",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  },
  {
    title: "How long does it take for my insurance confirmation",
    description: "You have questions?we have answers to all your questions and if you can’t find an answer to your question here, contact us."
  }
]

export default function Home() {
  return (
    <main className="mx-auto max-w-[1440px]">
      <div className="mb-[192px] px-20 flex gap-8">
        <div className="w-[608px] mt-[116px] font-semibold text-custom-grey">
          <h1 className="text-5xl">
            Home insurance policy tailored for everyone
          </h1>
          <p className="text-lg leading-[26.1px] mt-6 mb-12 font-[400]">
            Whether you prefer to buy online or want expert guidance,
            <br /> Kolanut makes it easy to find your perfect home policy. The
            <br /> Cheapest home Insurance Deals at your Fingertips
          </p>
          <button className="bg-custom-red text-slate-100 text-lg leading-[26.1px] rounded-xl px-6 py-3">
            Get Instant Quote
          </button>
          <p></p>
        </div>
        <div className="mt-[109.6px] rounded-3xl overflow-hidden">
          <Image
            src="/homepage/cover-1.png"
            width={632}
            height={491}
            alt="cover"
          />
        </div>
      </div>
      <div className="relative h-[359px] flex justify-center items-center">
        <Image className="max-w-[1440px]" sizes="100vw" fill src="/homepage/wave-vector.svg" alt="wave"/>
        <div className="relative z-10">
          <h2 className="mb-[54px] text-[#FAFBFF] text-center text-2xl leading-[30.24px] font-semibold">We partner with Top Insurance companies</h2>
          <div className="flex gap-[176.59px]">
            <Image src="/homepage/partner-1.svg" width={158.94} height={54} alt="partner"/>
            <Image src="/homepage/partner-2.svg" width={303.76} height={54} alt="partner"/>
            <Image src="/homepage/partner-3.svg" width={71.52} height={54} alt="partner"/>
            <Image src="/homepage/partner-4.svg" width={218} height={54} alt="partner"/>
          </div>
        </div>
      </div>
      <div className="pt-[300px] pb-[120px] px-24">
        <h2 className="mb-[74px] text-[40px] leading-[50px] font-bold text-center text-[#5B5B5B]">
          Why choose us?
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
          <div className="relative px-6 pt-[62px] basis-[48%] rounded-2xl bg-[#F7F7F7] max-w-[612px] h-[206px] border border-[#DEDEDE]">
            <div className="absolute -top-8 bg-white px-[8.5px] py-[8.75px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/streamline-plump.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-[21px] font-semibold text-custom-grey">
              Transparent & Trustworthy
            </h3>
            <p className="text-base leading-[20.26px] font-medium text-[#7A7D86]">
              We provide clear, unbiased information to help you make an
              informed decision without any hidden fees or charges
            </p>
          </div>
          <div className="relative px-6 pt-[62px] basis-[48%]  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-[206px] border border-[#DEDEDE]">
            <div className="absolute -top-8 bg-white px-[8.5px] py-[8.75px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/support.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-[21px] font-semibold text-custom-grey">
              Transparent & Trustworthy
            </h3>
            <p className="text-base leading-[20.26px] font-medium text-[#7A7D86]">
              We provide clear, unbiased information to help you make an
              informed decision without any hidden fees or charges
            </p>
          </div>
          <div className="relative px-6 pt-[62px] basis-[48%]  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-[206px] border border-[#DEDEDE]">
            <div className="absolute -top-8 bg-white px-[8.5px] py-[8.75px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/coverage.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-[21px] font-semibold text-custom-grey">
              Transparent & Trustworthy
            </h3>
            <p className="text-base leading-[20.26px] font-medium text-[#7A7D86]">
              We provide clear, unbiased information to help you make an
              informed decision without any hidden fees or charges
            </p>
          </div>
          <div className="relative px-6 pt-[62px] basis-[48%] rounded-2xl bg-[#F7F7F7] max-w-[612px] h-[206px] border border-[#DEDEDE]">
            <div className="absolute -top-8 bg-white px-[8.5px] py-[8.75px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/homepage/innovation.svg"
                width={44.5}
                height={45}
                alt="icon"
              />
            </div>
            <h3 className="mb-4 text-[21px] font-semibold text-custom-grey">
              Transparent & Trustworthy
            </h3>
            <p className="text-base leading-[20.26px] font-medium text-[#7A7D86]">
              We provide clear, unbiased information to help you make an
              informed decision without any hidden fees or charges
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[150px] relative">
        <h2 className="text-custom-grey text-[40px] font-semibold leading-[50.4px] text-center">
          3 Steps to safeguarding your Home
        </h2>
        <h5 className="max-w-[933px] mx-auto mt-4 text-base text-[#6C6C6C] font-normal leading-[23.2px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </h5>
        <div className="mt-[77px] mb-[84px] h-[536px] relative rounded-[32px] overflow-hidden">
          <Image
            className="right-0"
            src="/homepage/bg-1.svg"
            alt="bg"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="mt-[77px] mb-[84px] h-[657px] relative rounded-[32px] overflow-hidden">
          <Image
            className="right-0"
            src="/homepage/bg-2.svg"
            alt="bg"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className="mt-[77px] mb-[84px] h-[488px] relative rounded-[32px] overflow-hidden">
          <Image
            className="right-0"
            src="/homepage/bg-3.svg"
            alt="bg"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </div>
      <div className="mx-20 mt-[300px] mb-[200px] w-[1279.63px] h-[628px] flex justify-between">
        <div className="basis-2/4 max-w-[581px]">
          <h2 className="mb-[24px] text-[40px] font-semibold leading-[50.4px]">
            On the spot assistance from expert advisors
          </h2>
          <p className="text-lg font-normal leading-[26.1px]">
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
        <figure className="basis-2/4 max-w-[635.63px] relative">
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
      <div className="pt-[100px]">
        <h2 className="max-w-[800px] mx-auto text-custom-grey font-semibold text-[40px] leading-[50.4px] text-center">
          Protect your most Treasured Space Against Risk
        </h2>
        <p className="max-w-[656px] mx-auto text-center text-[#535763] font-normal text-lg leading-[26.1px]">
          Our new suite of Home  insurance products to help you protect your
          home, furniture, and beautiful family memories.
        </p>
        <div className="flex mt-[118px] mb-[163px] ml-[80px]">
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
            <div className="max-w-[522px] mb-16">
              <h3 className="mb-2 text-custom-grey text-2xl font-semibold leading-[28.8px]">
                Corporate Propertiess
              </h3>
              <p className="mb-6 text-[#67696D] leading-[26.1px] font-normal">
                From construction risks to ensuring quality standards, our
                insurance solutions are designed to support property developers
                in delivering secure and reliable homes to their client
              </p>
            </div>
            <button className="mt-10 px-6 py-3 border-2 border-custom-red text-custom-red rounded-xl">
              Learn more
            </button>
          </div>
          <div className="max-w-[808px] basis-2/3 relative">
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
      <div className="mt-[300px] pt-20 mx-20 mb-20">
        <h2 className="mb-14 text-[40px] leading-[50.4px] text-center font-semibold">
          What our customers are saying about us
        </h2>
        <div>
          <div className="px-5 py-6 bg-[#FCFCFC] rounded-3xl border-[1.5px] border-[#F0F0F0] max-w-[413px]">
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
      <div className="mb-[300px] mx-20 flex gap-[125px]">
        <div className="max-w-[575px]">
          <h2 className="mb-2 text-custom-grey text-5xl leading-[69.6px] font-semibold">
            The Kolanut shield{" "}
            <span className="text-custom-red">of Honour</span>
          </h2>
          <p className="text-base font-normal leading-[20.16px] text-[#535763]">
            Explore our comprehensive list of real estate partners offering
            complete coverage on housing options
          </p>
        </div>
        <div className="flex flex-wrap gap-x-20 gap-y-6 max-w-[537px]">
          <Image
            src="/homepage/partner-1.png"
            width={220.75}
            height={75}
            alt="partner"
          />
          <Image
            src="/homepage/partner-2.png"
            width={99.33}
            height={75}
            alt="partner"
          />
          <Image
            src="/homepage/partner-3.png"
            width={75}
            height={75}
            alt="partner"
          />
          <Image
            src="/homepage/partner-4.png"
            width={302.78}
            height={75}
            alt="partner"
          />
        </div>
      </div>
      <div className="mt-[300px] pt-[120px] pb-[118px] px-24">
        <div className="mb-20 flex justify-between">
          <h2 className="text-[40px] leading-[50.4px] font-bold text-[#444444]">
            News and updates
          </h2>
          <span className="flex gap-3.5 text-[21px] leading-[26.46px] text-[#444444] font-semibold">
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
        <div className="flex gap-6">
          <div className="max-w-[400px]">
            <div className="relative w-full h-[254px] rounded-[20px]">
              <Image src="/homepage/blog-1.png" sizes="100%" fill alt="blog" />
            </div>
            <h3
              className={`${inter.className} mt-4 mb-8 font-semibold text-2xl leading-[29.05px] text-[#444444]`}
            >
              Tips for lowering your home Insurance premiums
            </h3>
            <span className="flex gap-2 items-center">
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
          <div className="max-w-[400px]">
            <div className="relative w-full h-[254px] rounded-[20px]">
              <Image src="/homepage/blog-2.png" sizes="100%" fill alt="blog" />
            </div>
            <h3
              className={`${inter.className} mt-4 mb-8 font-semibold text-2xl leading-[29.05px] text-[#444444]`}
            >
              The Benefits of Bundling Insurance Policies
            </h3>
            <span className="flex gap-2 items-center">
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
          <div className="max-w-[400px]">
            <div className="relative w-full h-[254px] rounded-[20px]">
              <Image src="/homepage/blog-3.png" sizes="100%" fill alt="blog" />
            </div>
            <h3
              className={`${inter.className} mt-4 mb-8 font-semibold text-2xl leading-[29.05px] text-[#444444]`}
            >
              Preparing your home for the Rainy season
            </h3>
            <span className="flex gap-2 items-center">
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
      <div className="mt-[238px] mx-[258px] mb-[300px] pb-20 pt-[54px]">
        <h2 className="mb-2 text-center text-custom-grey font-semibold leading-[50.4px] text-[40px]">
          Frequently asked questions
        </h2>
        <p className="m-auto mb-10 max-w-[656px] text-lg leading-[26.1px] text-center font-normal text-[#535763]">
          You have questions?we have answers to all your questions and if you
          can’t find an answer to your question here, contact us.
        </p>
        <Accordion accordionItems={faq} />
      </div>
    </main>
  );
}
