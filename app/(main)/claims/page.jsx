import Accordion from "@/components/accordion/accordion";
import Fire from "@/icons/fire";
import Image from "next/image";
import ClaimCompensation from "../_component/claim-compensation";

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

const ClaimsPage = () => {
  return (
    <main className="max-w-[1920px]">
      <div className="mb-[116px] flex justify-between md:mt-[203px] md:mx-[118px]">
        <div className="basis-full md:basis-[48%]">
          <div className="mb-[64px] relative max-w-[553px] after:-z-10 md:after:content[''] after:absolute after:left-0 after:top-[43px] after:w-[104%] after:h-[83.7%] after:bg-[#F9D7D9]">
            <h1 className="w-full relative z-10 pt-8 pb-[31px] pl-[43px] pr-[11px] bg-custom-red text-white md:text-5xl md:leading-[60.48px] font-semibold">
              Here at kolanut Africa
            </h1>
          </div>
          <p className="text-[#444444] font-medium md:text-[28px] md:leading-[42px]">
            We understand that unexpected events like burglary and fire/natural
            disasters can be stressful. That’s why we are here to guide you
            through the claims process with ease.
          </p>
        </div>
        <div className="full basis-full aspect-[1.38] md:basis-[48%]">
          <div className="relative w-full h-full">
            <Image
              src="/claims/claims-cover.png"
              sizes="100vw"
              fill
              alt="cover"
            />
          </div>
        </div>
      </div>
      <div className="ml-[80px] mr-[66px] pt-[62px] pb-[100px]">
        <h2 className="mb-2 text-[#5B5B5B] text-center font-bold md:text-[40px] md:leading-[50.4px]">
          When to file a claim
        </h2>
        <p className="mx-auto mb-[61px] max-w-[644px] text-center font-normal text-custom-grey md:text-lg md:leading-[26.1px]">
          Claims must be filed on or before{" "}
          <span className="text-[#F72A33]">14 days</span> after the incident to
          ensure prompt processing and resolution
        </p>
        <div className="flex gap-[62px] justify-center">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl after:content-[''] after:absolute after:-top-[27px] after:left-12 after:w-[94%] after:h-[114%] after:border after:border-custom-red after:rounded-[20px] w-[448px] h-[380.89px]">
              <div className="relative w-full h-full">
                <Image
                  src="/claims/fire-warning.png"
                  sizes="100vw"
                  fill
                  alt="fire warning"
                />
              </div>
            </div>
          </div>
          <div className="basis-[60%] max-w-[786px]">
            <div className="mt-6 flex gap-4">
              <div>
                <Fire />
              </div>
              <div>
                <h3 className="mb-2 text-custom-red text-2xl leading-[30.24px] font-semibold">
                  Fire or Natural disaster
                </h3>
                <p className="text-base leading-6 font-medium text-[#5B5B5B]">
                  When facing the aftermath of a fire or natural disaster, such
                  as a hurricane, flood, or earthquake, navigating the insurance
                  claims process can feel daunting. However, having the right
                  insurance coverage in place can provide crucial financial
                  assistance and peace of mind during these challenging times.
                </p>
              </div>
            </div>
            <div className="mt-16 flex gap-4">
              <div>
                <Fire />
              </div>
              <div>
                <h3 className="mb-2 text-custom-red text-2xl leading-[30.24px] font-semibold">
                  Burglary
                </h3>
                <p className="text-base leading-6 font-medium text-[#5B5B5B]">
                  A burglary can result in stolen belongings, property damage,
                  and a sense of insecurity in your own home. Whether it&apos;s
                  a break-in while you&apos;re away or a forced entry during the
                  night, filing a claim for burglary damage is crucial to
                  recover the value of stolen items and repair any damage to
                  your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-20 mb-[153px]">
        <span className="w-fit flex gap-2 items-center px-[10px] py-2 text-lg font-normal leading-[26.1px] text-custom-red rounded-[20px] bg-[#FEF0F1] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#AF060D" />
          </svg>
          <span>Simplified for you</span>
        </span>
        <h2 className="mt-8 mb-[94px] text-[40px] leading-[58px] text-custom-grey font-semibold">
          File a claim with ease
        </h2>
        <h3 className="mb-[55px] text-[28px] leading-[35.28px] font-medium text-custom-grey">
          Steps to process your claims
        </h3>
        <div className="relative w-full aspect-[2.2] rounded-2xl border border-[#DEDEDE]">
          <Image
            src="/claims/claim-settlement.png"
            sizes="100vw"
            fill
            alt="claim settlement"
          />
        </div>
      </div>
      <div className="mx-[168px] mb-[189px] flex flex-wrap gap-x-8 gap-y-[38px] justify-center">
        <div className="p-5">
            <div className="mb-8 w-10 h-10 flex justify-center items-center rounded-full bg-[#FCE7E5]">
                <span className="text-lg leading-[26.1px] font-normal text-custom-red">1</span>
            </div>
            <h3 className="mb-6 text-base leading-[20.16px] text-custom-grey font-semibold">
                Initiate your claim
            </h3>
            <p className="max-w-[496px] basis-[45%] text-base leading-6 font-normal text-[#6C6C6C]">
            To initiate your claim, we offer convenient options tailored to your preference. You can easily begin the process through the online form . Allowing you to submit your claim conveniently.
            </p>
        </div>
        <div className="p-5">
            <div className="mb-8 w-10 h-10 flex justify-center items-center rounded-full bg-[#FCE7E5]">
                <span className="text-lg leading-[26.1px] font-normal text-custom-red">2</span>
            </div>
            <h3 className="mb-6 text-base leading-[20.16px] text-custom-grey font-semibold">
            Submit Documentation
            </h3>
            <p className="max-w-[496px] basis-[45%] text-base leading-6 font-normal text-[#6C6C6C]">
            Easily upload photos, fill forms or attach receipts through our platform. Streamlined submission ensures quicker assessments and resolutions
            </p>
        </div>
        <div className="p-5">
            <div className="mb-8 w-10 h-10 flex justify-center items-center rounded-full bg-[#FCE7E5]">
                <span className="text-lg leading-[26.1px] font-normal text-custom-red">3</span>
            </div>
            <h3 className="mb-6 text-base leading-[20.16px] text-custom-grey font-semibold">
            Track your claim
            </h3>
            <p className="max-w-[496px] basis-[45%] text-base leading-6 font-normal text-[#6C6C6C]">
            Track your claims online for transparency. Stay informed about every step of the process. Our platform allows easy access to monitor progress.
            </p>
        </div>
        <div className="p-5">
            <div className="mb-8 w-10 h-10 flex justify-center items-center rounded-full bg-[#FCE7E5]">
                <span className="text-lg leading-[26.1px] font-normal text-custom-red">4</span>
            </div>
            <h3 className="mb-6 text-base leading-[20.16px] text-custom-grey font-semibold">
            Receive Resolution
            </h3>
            <p className="max-w-[496px] basis-[45%] text-base leading-6 font-normal text-[#6C6C6C]">
            Your claims are our top priority, handled promptly and professionally. Count on clear communication every step of the way. Trust in our commitment to efficient resolutions.
            </p>
        </div>
      </div>
      <div className="relative pt-[62px] pb-10 aspect-[2.1] bg-[rgba(0,0,0,0.1)]">
      <Image src="/claims/compensation-bg.png" className="-z-10 object-cover" sizes="100vw" fill alt="background"/>
        <h3 className="mb-2 text-white text-center md:text-[40px] leading-[50.4px]">
          Claims Compensation
        </h3>
        <p className="mb-[116px] text-center text-white">
        After the claim is accepted, you have the opportunity to decide your preferred method of compensation
        </p>
        <div>
          <ClaimCompensation />
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
};

export default ClaimsPage;
