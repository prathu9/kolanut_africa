import Image from "next/image";

const About = () => {
  return (
    <main>
      <div className="mb-[76px] mx-auto px-5 md:mb-[165px] md:px-24">
        <h1 className="mt-[50.36px] mx-auto mb-[55px] max-w-[974px] m-auto text-3xl text-[#444444] text-center font-bold leading-[45px] md:text-[36px] lg:text-[56px] lg:leading-[82px]">
          Building a secure future for Nigerian homes. Your peace of mind starts{" "}
          <br />
          <span className="text-custom-red">with Kolanut Africa.</span>
        </h1>
        <div className="relative flex justify-center">
          <div className="rounded-2xl w-full flex justify-center">
            <Image
              src="/about/about-cover.png"
              width={1248}
              height={612}
              alt="cover"
            />
          </div>
          <ul className="w-[100%] justify-center absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex gap-6 px-4 py-2 bg-white flex-nowrap shadow-[0_6.13px_12.27px_-3.07px_rgba(174,1,13,0.2)] sm:px-10 sm:gap-10 sm:flex-wrap sm:rounded-2xl md:py-5 lg:py-[42px] lg:px-[95px] lg:w-4/5 lg:gap-[106px] xl:flex-nowrap">
            <li className="w-fit flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-xs leading-[15.12px] sm:text-base md:leading-[50.4px] md:text-2xl lg:text-[40px]">
                3+
              </span>
              <span className="text-[8px] font-medium text-[#444444] leading-[10.08px] whitespace-nowrap sm:text-sm md:text-base md:leading-[20.16px]">
                Years of experience
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-xs leading-[15.12px] sm:text-base md:leading-[50.4px] md:text-2xl lg:text-[40px]">
                500+
              </span>
              <span className="text-[8px] font-medium text-[#444444] leading-[10.08px] whitespace-nowrap sm:text-sm md:text-base md:leading-[20.16px]">
                Claims resolved
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-xs leading-[15.12px] sm:text-base md:leading-[50.4px] md:text-2xl lg:text-[40px]">
                3000+
              </span>
              <span className="text-[8px] font-medium text-[#444444] leading-[10.08px] whitespace-nowrap sm:text-sm md:text-base md:leading-[20.16px]">
                Happy customers
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-xs leading-[15.12px] sm:text-base md:leading-[50.4px] md:text-2xl lg:text-[40px]">
                8M
              </span>
              <span className="text-[8px] font-medium text-[#444444] leading-[10.08px] whitespace-nowrap sm:text-sm md:text-base md:leading-[20.16px]">
                Quote offered
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-[88px] mx-auto pt-[42px] px-5 flex justify-center items-start flex-nowrap gap-[101px] md:mb-[120px] md:pt-32 md:px-24">
        <div className="basis-full max-w-[692px]">
          <h2 className="mb-3 text-2xl font-bold leading-[30.24px] text-[#444444]md:text-[40px] md:leading-[50.4px]">
            Who we are
          </h2>
          <p className="mb-12 text-sm font-normal leading-[21px] text-[#5B5B5B] md:mb-8 md:text-base md:leading-[22px]">
            Kolanut Africa is a new wave of home insurance, built with the needs
            of everyday Nigerians in mind. We believe everyone deserves the
            peace of mind that comes with knowing your home is protected. At
            Kolanut Africa, we&apos;re on a mission to revolutionize the home
            insurance landscape in Nigeria.{" "}
          </p>
          <div className="mb-12 max-w-[345px] columns-2 gap-[23.8px] space-y-[23.8px] mx-auto md:mb-8 lg:mx-0 lg:hidden lg:space-y-9 lg:gap-8">
            <div className="w-[164.47px] h-auto rounded-2xl">
              <Image
                src="/about/management-1.png"
                width={164.47}
                height={160.94}
                alt="management"
              />
            </div>
            <div className="w-[164.47px] h-auto rounded-2xl">
              <Image
                src="/about/management-2.png"
                width={164.47}
                height={248.72}
                alt="management"
              />
            </div>
            <div className="w-[164.47px] h-auto rounded-2xl">
              <Image
                src="/about/management-3.png"
                width={164.47}
                height={248.72}
                alt="management"
              />
            </div>
            <div className="w-[164.47px] h-auto rounded-2xl">
              <Image
                src="/about/management-4.png"
                width={164.47}
                height={160.94}
                alt="management"
              />
            </div>
          </div>
          <h3 className="mb-3 font-semibold text-2xl leading-[26.46px] text-custom-red md:text-[21px] md:leading-[26.46px]">
            Our vision
          </h3>
          <p className="mb-8 text-sm font-medium leading-[21px] text-[#5B5B5B] md:text-base md:leading-[22px]">
            Our vision is to become the leading provider of home insurance in
            Nigeria, known for our unwavering commitment to our customers and
            our innovative approach to insurance. We envision a future where
            every homeowner has the security and support they need to thrive, no
            matter what life may bring.
          </p>
          <h3 className="mb-3 font-semibold text-2xl leading-[26.46px] text-custom-red md:text-[21px] md:leading-[26.46px]">
            Our mission
          </h3>
          <p className="text-sm font-medium leading-[21px] text-[#5B5B5B] md:mb-8 md:text-base md:leading-[22px]">
            To make home insurance available and accessible to every Nigerian
            household, regardless of their location or socioeconomic status. We
            believe that every homeowner deserves the security of insurance
            coverage, and we&apos;re dedicated to breaking down barriers to make
            this a reality.
          </p>
        </div>
        <div className="max-w-[450px] columns-2 gap-8 space-y-9 hidden lg:block">
          <div className="w-[212px] h-auto rounded-2xl">
            <Image
              src="/about/management-1.png"
              width={212}
              height={220}
              alt="management"
            />
          </div>
          <div className="w-[212px] h-auto rounded-2xl">
            <Image
              src="/about/management-2.png"
              width={212}
              height={340}
              alt="management"
            />
          </div>
          <div className="w-[212px] h-auto rounded-2xl">
            <Image
              src="/about/management-3.png"
              width={212}
              height={340}
              alt="management"
            />
          </div>
          <div className="w-[212px] h-auto rounded-2xl">
            <Image
              src="/about/management-4.png"
              width={212}
              height={220}
              alt="management"
            />
          </div>
        </div>
      </div>
      <div className="mb-[25.88px] mx-auto flex px-5 gap-[65px] justify-center md:mb-[120px] lg:px-24 ">
        <div className="basis-[530px] rounded-2xl overflow-hidden hidden md:block">
          <Image
            src="/about/business-man.png"
            width={530}
            height={654}
            alt="leader"
          />
        </div>
        <div className="basis-full md:basis-[634px]">
          <h3 className="mb-[22px] text-sm text-custom-red leading-[26.46px] font-semibold sm:text-base md:text-[21px] md:leading-[26.26px]">
            Our Story
          </h3>
          <h2 className="mb-8 text-2xl text-[#444444] font-bold leading-[30.24px] md:mb-[22px] md:text-[40px] md:leading-[50.4px]">
            We are a team built on the promise of a safe Home
          </h2>
          <div className="mb-8 basis-[353px] rounded-2xl overflow-hidden block md:mb-0 md:hidden">
            <Image
              src="/about/business-man.png"
              width={353}
              height={428.12}
              alt="leader"
            />
          </div>
          <p className="mb-4 text-sm font-normal leading-[21px] text-[#5B5B5B] md:mb-[37px] md:text-base md:leading-[22px]">
            Kolanut Africa was born out of a shared vision and a passion for
            making a positive impact on people&apos;s lives. It all began with a
            simple question: Why is home insurance so inaccessible to millions
            of Africans?
          </p>
          <p className="mb-4 text-sm font-normal leading-[21px] text-[#5B5B5B] md:mb-[37px] md:text-base md:leading-[22px]">
            As individuals who have witnessed firsthand the devastating effects
            of unexpected events on families and communities, we recognized the
            critical importance of having reliable insurance coverage. As
            individuals who have witnessed firsthand the devastating effects of
            unexpected events on families and communities, we recognized the
            critical importance of having reliable insurance coverage.
          </p>
          <p className="text-sm font-normal leading-[21px] text-[#5B5B5B] md:mb-[37px] md:text-base md:leading-[22px]">
            Through perseverance, collaboration, and a relentless focus on our
            core values, Kolanut Africa has emerged as a beacon of hope and
            opportunity in the insurance industry. We&apos;ve overcome numerous
            challenges, navigated uncharted territories, and celebrated
            countless milestones along the way.
          </p>
        </div>
      </div>
      <div className="mx-auto px-5 mb-[88.88px] md:mb-0 md:py-[120px] lg:px-24">
        <h4 className="mb-6 text-left text-sm leading-[17.64px] text-custom-red font-semibold md:text-[21px] md:leading-[26.26px] md:text-center">
          Our Values
        </h4>
        <h2 className="max-w-[1002px] mx-auto mb-[76px] text-2xl leading-[30.24px] text-[#5B5B5B] font-bold md:mb-[112px] md:text-center md:text-[40px] md:leading-[50.4px]">
          We take great pride in maintaining values that inspire us to strive
          for excellence
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-12 md:gap-y-16">
          <div className="relative px-6 pt-[62px] pb-6 basis-full h-fit rounded-2xl bg-[#F7F7F7] max-w-[612px] border border-[#DEDEDE] md:basis-[48%] md:h-[280px] xl:h-[206px]">
            <div className="absolute -top-5 bg-white p-[8px] rounded-lg border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] md:-top-8 md:p-[15px] md:rounded-2xl">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image src="/about/value-1.svg" sizes="100vw" fill alt="icon" />
              </div>
            </div>
            <h3 className="mb-4 text-base leading-[20.16px] font-semibold text-custom-grey md:text-[21px] md:leading-[26.46px]">
              Integrity
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-6">
              We believe in conducting business with honesty, transparency, and
              integrity. Trust is the foundation of our relationships with our
              customers, and we uphold the highest ethical standards in all our
              interactions.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-6 basis-full h-fit rounded-2xl bg-[#F7F7F7] max-w-[612px] border border-[#DEDEDE] md:basis-[48%] md:h-[280px] xl:h-[206px]">
            <div className="absolute -top-5 bg-white p-[8px] rounded-lg border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] md:-top-8 md:p-[15px] md:rounded-2xl">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image src="/about/value-2.svg" sizes="100vw" fill alt="icon" />
              </div>
            </div>
            <h3 className="mb-4 text-base leading-[20.16px] font-semibold text-custom-grey md:text-[21px] md:leading-[26.46px]">
              Empathy
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-6">
              We understand the importance of empathy and compassion in serving
              our customers during their times of need.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-6 basis-full h-fit rounded-2xl bg-[#F7F7F7] max-w-[612px] border border-[#DEDEDE] md:basis-[48%] md:h-[280px] xl:h-[206px]">
            <div className="absolute -top-5 bg-white p-[8px] rounded-lg border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] md:-top-8 md:p-[15px] md:rounded-2xl">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image src="/about/value-3.svg" sizes="100vw" fill alt="icon" />
              </div>
            </div>
            <h3 className="mb-4 text-base leading-[20.16px] font-semibold text-custom-grey md:text-[21px] md:leading-[26.46px]">
              Community
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-6">
              We are committed to making a positive impact in the communities we
              serve. we strive to uplift and support those in need, fostering a
              culture of compassion and social responsibility.
            </p>
          </div>
          <div className="relative px-6 pt-[62px] pb-6 basis-full h-fit rounded-2xl bg-[#F7F7F7] max-w-[612px] border border-[#DEDEDE] md:basis-[48%] md:h-[280px] xl:h-[206px]">
            <div className="absolute -top-5 bg-white p-[8px] rounded-lg border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)] md:-top-8 md:p-[15px] md:rounded-2xl">
              <div className="relative w-6 h-6 md:w-8 md:h-8">
                <Image src="/about/value-4.svg" sizes="100vw" fill alt="icon" />
              </div>
            </div>
            <h3 className="mb-4 text-base leading-[20.16px] font-semibold text-custom-grey md:text-[21px] md:leading-[26.46px]">
              Innovation
            </h3>
            <p className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-base md:leading-6">
              We embrace innovation as a driving force behind our quest to
              revolutionize the home insurance industry. we continually seek new
              ways to improve the insurance experience for our customers.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] pb-0 mb-[88.73px] mx-auto px-5 md:pb-[120px] lg:px-24">
        <h3 className="mb-[29px] text-sm font-semibold leading-[17.64px] text-custom-red md:text-[21px] md:leading-[26.46px]">
          Our Team
        </h3>
        <h2 className="mb-2 text-2xl leading-[30.24px] text-[#444444] font-bold md:text-[40px] md:leading-[50.4px]">
          Meet our team at Kolanut Africa
        </h2>
        <h4 className="text-sm leading-[21px] font-medium text-[#7A7D86] md:text-[18px] md:leading-[26px]">
          Get to know the talented individuals behind Kolanut Africa.
        </h4>
        <div className="mt-[51px] md:mt-12">
          <div className="flex gap-x-6 gap-y-12 flex-wrap md:flex-nowrap">
            <div className="basis-full md:basis-1/3">
              <div className="mx-auto relative w-full aspect-square bg-[#FFE5E6]">
                <Image
                  className="absolute object-contain bottom-0"
                  src="/about/team-1.png"
                  sizes="100vw"
                  fill
                  alt="team"
                />
              </div>
              <h4 className="mt-[17px] mb-2 text-center text-[20px] leading-[25.2px] text-[#444444] font-semibold md:mt-6 md:mt-6 md:mb-[10px] md:text-[21px] md:leading-[26.46px]">
                Fredrik Badda
              </h4>
              <h5 className="text-[18px] text-center font-medium text-[#444444] leading-[26px]">
                CEO{" "}
              </h5>
              <p className="mt-2 mb-4 mx-auto max-w-[383px] text-[14px] leading-[21px] text-center font-normal text-[#7A7D86] md:leading-[17.64px] md:mt-4 md:mb-[22px]">
                A visionary leader with over 15 years of experience in the
                insurance industry. Fredrik is passionate about making insurance
                accessible and affordable for all Africans.
              </p>
              <div className="flex gap-[14px] justify-center">
                <a herf="#">
                  <Image
                    src="/social-icon/linkedIn-light.svg"
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </a>
                <a herf="#">
                  <Image
                    src="/social-icon/instagram-light.svg"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src="/social-icon/x-light.svg"
                    width={24}
                    height={24}
                    alt="x"
                  />
                </a>
              </div>
            </div>
            <div className="basis-full md:basis-1/3">
              <div className="mx-auto relative w-full aspect-square bg-[#FFE5E6]">
                <Image
                  className="absolute object-contain bottom-0"
                  src="/about/team-2.png"
                  sizes="100vw"
                  fill
                  alt="team"
                />
              </div>
              <h4 className="mt-[17px] mb-2 text-center text-[20px] leading-[25.2px] text-[#444444] font-semibold md:mt-6 md:mt-6 md:mb-[10px] md:text-[21px] md:leading-[26.46px]">
                Kate Afolabi
              </h4>
              <h5 className="text-[18px] text-center font-medium text-[#444444] leading-[26px]">
                Head of Product development
              </h5>
              <p className="mt-2 mb-4 mx-auto max-w-[383px] text-[14px] leading-[21px] text-center font-normal text-[#7A7D86] md:leading-[17.64px] md:mt-4 md:mb-[22px]">
                A visionary leader with expertise in creating innovative
                insurance solutions tailored to African needs. Kate leads the
                team in creating relevant insurance solutions.
              </p>
              <div className="flex gap-[14px] justify-center">
                <a herf="#">
                  <Image
                    src="/social-icon/linkedIn-light.svg"
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </a>
                <a herf="#">
                  <Image
                    src="/social-icon/instagram-light.svg"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src="/social-icon/x-light.svg"
                    width={24}
                    height={24}
                    alt="x"
                  />
                </a>
              </div>
            </div>
            <div className="basis-full md:basis-1/3">
              <div className="mx-auto relative w-full aspect-square bg-[#FFE5E6]">
                <Image
                  className="absolute object-contain bottom-0"
                  src="/about/team-3.png"
                  sizes="100vw"
                  fill
                  alt="team"
                />
              </div>
              <h4 className="mt-[17px] mb-2 text-center text-[20px] leading-[25.2px] text-[#444444] font-semibold md:mt-6 md:mt-6 md:mb-[10px] md:text-[21px] md:leading-[26.46px]">
                David Shaname
              </h4>
              <h5 className="text-[18px] text-center font-medium text-[#444444] leading-[26px]">
                CTO
              </h5>
              <p className="mt-2 mb-4 mx-auto max-w-[383px] text-[14px] leading-[21px] text-center font-normal text-[#7A7D86] md:leading-[17.64px] md:mt-4 md:mb-[22px]">
                David is a tech visionary who leads technology team, leveraging
                innovation to create a seamless and user-friendly online
                experience.
              </p>
              <div className="flex gap-[14px] justify-center">
                <a herf="#">
                  <Image
                    src="/social-icon/linkedIn-light.svg"
                    width={24}
                    height={24}
                    alt="linkedin"
                  />
                </a>
                <a herf="#">
                  <Image
                    src="/social-icon/instagram-light.svg"
                    width={24}
                    height={24}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src="/social-icon/x-light.svg"
                    width={24}
                    height={24}
                    alt="x"
                  />
                </a>
              </div>
            </div>
          </div>
          <button className="mt-[56px] mx-auto block px-8 py-4 text-base font-medium leading-[20.16px] text-custom-red border border-custom-red rounded md:mt-[70px] md:text-lg md:leading-[22.68px]">
            See All
          </button>
        </div>
      </div>
      <div className="w-full h-[543px] bg-custom-red flex items-center justify-center flex-col">
        <h3 className="text-2xl font-bold text-center text-white leading-[30.24px] md:text-[40px] md:leading-[50.4px]">
          Join our team!
        </h3>
        <p className="mx-[67px] mt-4 text-white text-sm font-medium leading-[21px] text-center md:text-[18px] md:leading-[26px]">
          Our team is growing fast and we’re always looking for smart people.
        </p>
        <button className="mt-12 px-8 py-3 text-custom-red bg-white rounded font-medium text-base leading[20.16px] md:py-4 md:text-lg md:leading-[22.68px]">
          View all open roles
        </button>
      </div>
    </main>
  );
};

export default About;
