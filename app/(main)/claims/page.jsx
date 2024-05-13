import Accordion from "@/components/accordion/accordion";
import Fire from "@/icons/fire";
import Image from "next/image";
import ClaimCompensation from "../_component/claim-compensation";

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

const ClaimsPage = () => {
  return (
    <main className="max-w-[1920px] mx-auto">
      <div className="mx-5 mt-[70.17px] mb-[88px] flex justify-between flex-wrap-reverse gap-y-[35px] md:mx-10 lg:mt-[203px] lg:mx-[118px] lg:mb-[116px]">
        <div className="basis-full md:basis-[48%]">
          <div className="mb-[31px] relative max-w-[553px] after:w-[283.86px] after:-z-10 md:after:content[''] after:absolute after:left-0 after:top-[29px] after:h-[43px] after:bg-[#F9D7D9] md:after:w-[104%] md:after:h-[83.7%] md:top-[43px]">
            <h1 className="w-fit relative z-10 pl-4 pt-[10px] pr-[14px] pb-[11px] font-semibold bg-custom-red text-white text-2xl leading-9 md:mb-[64px] md:w-full md:pt-8 md:pb-[31px] md:pl-[43px] md:pr-[11px] md:text-3xl lg:text-5xl lg:leading-[60.48px]">
              Here at kolanut Africa
            </h1>
          </div>
          <p className="text-[#444444] font-medium text-sm leading-[21px] md:text-xl lg:text-[28px] lg:leading-[42px]">
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
      <div className="mb-[92px] px-5 pt-10 pb-[100px] bg-[#FDF8F8] md:mb-20 md:pt-[62px] md:pl-[80px] md:pr-[66px]">
        <h2 className="mx-auto mb-2 text-2xl leading-[30.24px] text-[#5B5B5B] text-left font-bold md:text-center md:text-[40px] md:leading-[50.4px]">
          When to file a claim
        </h2>
        <p className="mb-[61px] max-w-[644px] font-normal text-sm leading-[20.3px] text-custom-grey md:text-center md:text-lg md:leading-[26.1px]">
          Claims must be filed on or before{" "}
          <span className="text-[#F72A33]">14 days</span> after the incident to
          ensure prompt processing and resolution
        </p>
        <div className="flex gap-[62px] justify-center flex-wrap lg:flex-nowrap">
          <div className="relative w-full">
            <div className="w-[95%] aspect-square overflow-hidden rounded-2xl after:content-[''] after:absolute after:-top-[27px] after:left-12 after:w-[90%] after:h-[114%] after:border after:border-custom-red after:rounded-[20px] md:after:max-w-[448px] md:after:max-h-[431px] md:w-[448px] md:h-[380.89px]">
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
          <div className="basis-full max-w-[786px] md:basis-[60%]">
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
      <div className="mx-5 mb-10 md:mx-20 md:mb-[153px]">
        <span className="w-fit flex gap-2 items-center px-[10px] py-2 text-sm font-normal leading-[20.3px] text-custom-red rounded-[20px] bg-[#FEF0F1] shadow-[0_4px_4px_0_rgba(0,0,0,0.1)] md:text-lg md:leading-[26.1px]">
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
        <h2 className="mt-6 mb-[26px] text-2xl leading-[34.8px] text-custom-grey font-semibold md:mt-8 md:mb-[94px] md:text-[40px] md:leading-[58px]">
          File a claim with ease
        </h2>
        <h3 className="mb-[55px] text-sm leading-[17.64px] font-medium text-custom-grey md:text-[28px] md:leading-[35.28px]">
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
      <div className="mx-5 mb-[130px] flex flex-wrap gap-x-8 gap-y-10 justify-center md:mx-[168px] md:mb-[189px] md:gap-y-[38px]">
        <div className="p-5 rounded-2xl border border-[#FCE7E5] bg-[#FFFEFC]">
            <div className="mb-8 w-10 h-10 flex justify-center items-center rounded-full bg-[#FCE7E5]">
                <span className="text-lg leading-[26.1px] font-normal text-custom-red">1</span>
            </div>
            <h3 className="mb-6 text-base leading-[20.16px] text-custom-grey font-semibold">
                Initiate your claim
            </h3>
            <p className="max-w-[496px] basis-[45%] text-sm leading-[21px] font-normal text-[#6C6C6C] md:text-base md:leading-6">
            To initiate your claim, we offer convenient options tailored to your preference. You can easily begin the process through the online form . Allowing you to submit your claim conveniently.
            </p>
        </div>
        <div className="p-5 rounded-2xl border border-[#FCE7E5] bg-[#FFFEFC]">
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
        <div className="p-5 rounded-2xl border border-[#FCE7E5] bg-[#FFFEFC]">
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
        <div className="p-5 rounded-2xl border border-[#FCE7E5] bg-[#FFFEFC]">
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
      <div className="relative pt-[62px] pb-[66px] aspect-[2.1] bg-[rgba(0,0,0,0.1)] md:pb-10">
      <Image src="/claims/compensation-bg.png" className="-z-10 object-cover" sizes="100vw" fill alt="background"/>
        <h3 className="mb-2 text-white text-center font-bold text-2xl leading-[30.24px] md:text-[40px] md:leading-[50.4px]">
          Claims Compensation
        </h3>
        <p className="max-w-[480px] mx-auto mb-[46px] text-center text-white text-sm leading-[20.3px] font-normal md:max-w-[306px] md:mb-[116px] md:text-lg md:leading-[26.1px]">
        After the claim is accepted, you have the opportunity to decide your preferred method of compensation
        </p>
        <div>
          <ClaimCompensation />
        </div>
      </div>
      <div className="mx-5 my-[88px] lg:mx-[258px] md:mt-[200px] md:mb-[207px] md:mx-20 md:pt-[54px] md:pb-20">
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
