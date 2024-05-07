import Image from "next/image";
import TabSection from "./tab-section";
import Accordion from "@/components/accordion/accordion";
import Shield from "@/icons/shield";
import Case from "@/icons/case";
import SupportServices from "@/icons/support-services";
import Customize from "@/icons/customize";

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
      <div className="mb-[210px] flex justify-center items-start gap-[80px] mx-10 mt-[100px] h-fit flex-wrap-reverse md:mx-auto md:mb-[210px] md:flex-nowrap xl:gap-[80px]">
        <div className="pb-auto basis-full max-w-[639px] xl:basis-[45%] md:basis-[40%]">
          <h2 className="mb-6 text-2xl leading-[60.48px] font-semibold text-[#2E3342] md:text-5xl">
            We have a range of risk you can insure against
          </h2>
          <p className="w-[90%] text-[18px] lading-[26.1px] font-normal text-[#2E3342]">
            We are dedicated to making the process of buying and claiming
            insurance transparent, easy, and accessible through our innovative
            digital platform.  <br /> We  envision a future where safeguarding
            one&apos;s home is a straightforward and empowering process
          </p>
        </div>
        <div className="basis-full relative flex justify-center items-center md:basis-[28%] xl:basis-[45%]">
          <div className="pb-auto relative w-[320px] aspect-[1.3] shadow-[0_4px_60.5px_5px_rgba(244,244,244,0.6)] xl:w-[455px] xl:h-[346px]">
            <Image
              className="absolute object-contain"
              src="/coverage/risk-insurance-option.png"
              sizes="100vw"
              fill
              alt="rick management"
            />
            <svg
              className="absolute w-[80px] h-[80px] top-[45px] -left-[20%] xl:w-[135px] xl:top-[60px] xl:-left-[22%] xl:h-[135px]"
              viewBox="0 0 135 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M134.153 1.31286C134.133 0.576753 133.52 -0.00385528 132.784 0.0160396C132.048 0.0359345 131.467 0.648799 131.487 1.3849C131.507 2.12102 132.12 2.70163 132.856 2.68173C133.592 2.66184 134.173 2.04897 134.153 1.31286ZM2.83284 133.464C2.81294 132.728 2.20008 132.147 1.46397 132.167C0.727867 132.187 0.147259 132.8 0.167154 133.536C0.187048 134.272 0.799913 134.853 1.53602 134.833C2.27212 134.813 2.85273 134.2 2.83284 133.464ZM1.49824 1.34889L1.49824 1.09889L1.24824 1.09888L1.24824 1.34888L1.49824 1.34889ZM1.49823 72.9998L1.24823 72.9998L1.24823 72.9998L1.49823 72.9998ZM132.82 1.09888L1.49824 1.09889L1.49823 1.59889L132.82 1.59888L132.82 1.09888ZM1.24824 1.34888L1.24823 72.9998L1.74823 72.9998L1.74824 1.34889L1.24824 1.34888ZM1.24823 72.9998L1.25 133.5L1.74999 133.5L1.74823 72.9998L1.24823 72.9998Z"
                fill="#AF060D"
              />
            </svg>
            <svg
              className="absolute top-[92px] -right-[70px] w-[80px] h-[129px] xl:top-[128px] xl:-right-[100px] xl:w-[113px] xl:h-[182px]"
              width="113"
              height="182"
              viewBox="0 0 113 182"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.863113 2.40294C1.22966 3.04161 2.04454 3.26222 2.68321 2.89568C3.32189 2.52913 3.54249 1.71425 3.17595 1.07557C2.80941 0.436903 1.99452 0.216298 1.35585 0.58284C0.717176 0.949382 0.496571 1.76427 0.863113 2.40294ZM110.344 181.164C110.71 181.802 111.525 182.023 112.164 181.656C112.802 181.29 113.023 180.475 112.656 179.836C112.29 179.198 111.475 178.977 110.836 179.344C110.198 179.71 109.977 180.525 110.344 181.164ZM111.5 1.73926L111.75 1.73926L111.75 1.48925L111.5 1.48926L111.5 1.73926ZM111.5 85.9997L111.25 85.9997L111.5 85.9997ZM2.01953 1.98926L111.5 1.98926L111.5 1.48926L2.01953 1.48926V1.98926ZM111.25 1.73926L111.25 85.9997L111.75 85.9997L111.75 1.73926L111.25 1.73926ZM111.25 85.9997L111.25 180.5L111.75 180.5L111.75 85.9997L111.25 85.9997Z"
                fill="#AF060D"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-[206px]">
        <h2 className="mb-2 text-[40px] text-center leading-[50.4px] font-bold text-custom-grey">
          Benefits of coverage
        </h2>
        <p className="mb-[51px] text-lg text-center leading-[27px] font-normal text-custom-grey">
          Having coverage for fire/natural disasters and burglary offers several
          key benefits
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
          <div className="relative px-6 pt-[62px] pb-8 basis-full rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6">
                <Shield />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey leading-[26.26px] md:text-[21px]">
              Financial Safeguarding
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              Coverage mitigates the financial repercussions of unforeseen
              events, such as fire, natural disasters or burglary. It serves as
              an investment to protect against significant financial losses.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6">
                <Case />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey leading-[26.26px] md:text-[21px]">
              Asset Preservation
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              Insurance coverage safeguards valuable assets including property
              and personal belongings. In the event of damage or loss, coverage
              facilitates swift reimbursement or replacement.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full  rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6">
                <SupportServices />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey leading-[26.26px] md:text-[21px]">
              Supportive Services
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              Insurance policies include additional services to support policy
              holders during emergencies. This may include access to emergency
              helplines, claims assistance, and guidance on loss prevention
              measures to reduce the risk of future incidents.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-8 basis-full rounded-2xl bg-[#F7F7F7] max-w-[612px] h-fit border border-[#DEDEDE] md:basis-[48%]">
            <div className="absolute -top-8 bg-white p-3 rounded-xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] ">
              <div className="relative w-6 h-6">
                <Customize />
              </div>
            </div>
            <h3 className="mb-4 text-base font-semibold text-custom-grey leading-[26.26px] md:text-[21px]">
              Customizable Coverage Options
            </h3>
            <p className="min-h-[71px] text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-[20.26px]">
              The coverage options are customizable , tailored to individual
              needs and preferences. This allows policy holders to choose what
              best suits their budget and circumstances.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-5 sm:mx-10 md:mx-auto">
        <h2
          className="mb-6 font-semibold text-2xl leading-[30.24px] text-[
#2E3342] text-center md:text-[40px] md:leading-[50.4px]"
        >
          Coverage options
        </h2>
        <p className="mb-[60px] max-w-[500px] mx-auto text-base leading-[20.3px] text-center font-normal md:text-lg md:leading-[26.1px] xl:max-w-[866px]">
          We are dedicated to making the process of buying and claiming
          insurance transparent, easy, and accessible through our innovative
          digital platform. 
        </p>
        <div className="mx-0 flex gap-x-[55px] gap-y-6 justify-center flex-wrap-reverse md:flex-nowrap md:mx-[90px]">
          <TabSection />
          <div className="max-w-[331px] h-[487px] bg-[#FAFAFA] rounded-3xl overflow-hidden md:max-w-[573px] md:h-[794px]">
            <div className="relative w-[331px] h-[487px] xl:w-[573px] xl:h-[794px]">
            <Image
              className="shadow-[0_57.82_88.14_0_rgba(0 0 0/15)"
              src="/coverage/tab-option-image-1.png"
              sizes="100vw"
              fill
              alt="coverage detail"
            />
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
      </div>
    </main>
  );
};

export default Coverage;
