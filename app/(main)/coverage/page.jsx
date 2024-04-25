import Image from "next/image";
import TabSection from "./tab-section";
import Accordion from "@/components/accordion/accordion";

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

const Coverage = () => {
  return (
    <main className="mx-auto max-w-[1920px]">
      <div className="relative w-full h-[688px]">
        <Image
          src="/coverage/coverage-cover.png"
          sizes="100vw"
          fill
          alt="cover"
        />
        <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
          <h1 className="max-w-[923px] text-[#FAFBFF] text-[64px] font-bold leading-[80.64px] text-center">
            Provide a cover for you on rainy days
          </h1>
          <p className="mb-12 max-w-[839px] text-[18px] text-[#F0F0F0] leading-[26.1px] text-center font-normal">
            We have a range of risks tou can insure your property against to
            provide a cover for you in an event of an unforeseen circumstances
          </p>
          <button className="px-6 py-3 text-white rounded-xl bg-custom-red">
            Get insured
          </button>
        </div>
      </div>
      <div className="mb-[300px] flex items-center gap-[68px] max-w-[1280px] mx-auto mt-[100px] h-[478px]">
        <div className="basis-2/3 max-w-[639px]">
          <h2 className="text-5xl leading-[60.48px] font-semibold text-[#2E3342]">
            We have a range of risk you can insure against
          </h2>
          <p className="text-[18px] lading-[26.1px] font-normal text-[#2E3342]">
            We are dedicated to making the process of buying and claiming
            insurance transparent, easy, and accessible through our innovative
            digital platform.  We  envision a future where safeguarding
            one&apos;s home is a straightforward and empowering process
          </p>
        </div>
        <div className="basis-1/2 max-w-[573px] h-[478px] relative flex justify-center bg-[#FAFAFA]">
          <Image
            className="shadow-inner-[0_0_0.32px_1.59px_rgba(175, 176, 171, 1)"
            src="/coverage/mobile-screen.png"
            width={381.81}
            height={478}
            alt="rick management"
          />
        </div>
      </div>
      <div>
        <h2
          className="mb-6 font-semibold text-[40px] leading-[50.4px] text-[
#2E3342] text-center"
        >
          Coverage options
        </h2>
        <p className="mb-[60px] max-w-[866px] mx-auto text-lg leading-[26.1px] text-center font-normal">
          We are dedicated to making the process of buying and claiming
          insurance transparent, easy, and accessible through our innovative
          digital platform. 
        </p>
        <div>
          <TabSection />
        </div>
        <div className="mx-[258px] my-[300px] pb-20 pt-[54px]">
          <h2 className="mb-2 text-center text-custom-grey font-semibold leading-[50.4px] text-[40px]">
            Frequently asked questions
          </h2>
          <p className="m-auto mb-10 max-w-[656px] text-lg leading-[26.1px] text-center font-normal text-[#535763]">
            You have questions?we have answers to all your questions and if you
            can’t find an answer to your question here, contact us.
          </p>
          <Accordion accordionItems={faq} />
        </div>
      </div>
    </main>
  );
};

export default Coverage;
