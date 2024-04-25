import Image from "next/image";

const About = () => {
  return (
    <main>
      <div className="mb-[165px] mx-auto px-24">
        <h1 className="mt-[50.36px] mx-auto mb-[55px] max-w-[974px] m-auto text-[56px] text-[#444444] text-center font-bold leading-[82px]">
          Building a secure future for Nigerian homes. Your peace of mind starts{" "}
          <br />
          <span className="text-custom-red">with Kolanut Africa.</span>
        </h1>
        <div className="relative flex justify-center">
          <div className="rounded-2xl">
            <Image
              src="/about/about-cover.png"
              width={1248}
              height={612}
              alt="cover"
            />
          </div>
          <ul className="w-4/5 justify-center absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex gap-[106px] px-[95px] py-[42px] rounded-2xl bg-white flex-wrap xl:flex-nowrap">
            <li className="w-fit flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-[40px] leading-[50.4px]">
                3+
              </span>
              <span className="text-base font-medium text-[#444444] leading-[20.16px] whitespace-nowrap">
                Years of experience
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-[40px] leading-[50.4px]">
                500+
              </span>
              <span className="text-base font-medium text-[#444444] leading-[20.16px] whitespace-nowrap">
                Claims resolved
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-[40px] leading-[50.4px]">
                3000+
              </span>
              <span className="text-base font-medium text-[#444444] leading-[20.16px] whitespace-nowrap">
                Happy customers
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <span className="text-custom-red font-bold text-[40px] leading-[50.4px]">
                8M
              </span>
              <span className="text-base font-medium text-[#444444] leading-[20.16px] whitespace-nowrap">
                Quote offered
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-[120px] mx-auto pt-32 px-24 flex justify-center items-start flex-wrap gap-[101px]">
        <div className="basis-full max-w-[692px]">
          <h2 className="mb-3 text-[40px] font-bold leading-[50.4px] text-[#444444]">
            Who we are
          </h2>
          <p className="mb-8 text-base font-medium leading-[22px] text-[#5B5B5B]">
            Kolanut Africa is a new wave of home insurance, built with the needs
            of everyday Nigerians in mind. We believe everyone deserves the
            peace of mind that comes with knowing your home is protected. At
            Kolanut Africa, we&apos;re on a mission to revolutionize the home
            insurance landscape in Nigeria.{" "}
          </p>
          <h3 className="mb-3 font-semibold text-[21px] leading-[26.46px] text-custom-red">
            Our vision
          </h3>
          <p className="mb-8 text-base font-medium leading-[22px] text-[#5B5B5B]">
            Our vision is to become the leading provider of home insurance in
            Nigeria, known for our unwavering commitment to our customers and
            our innovative approach to insurance. We envision a future where
            every homeowner has the security and support they need to thrive, no
            matter what life may bring.
          </p>
          <h3 className="mb-3 font-semibold text-[21px] leading-[26.46px] text-custom-red">
            Our mission
          </h3>
          <p>
            To make home insurance available and accessible to every Nigerian
            household, regardless of their location or socioeconomic status. We
            believe that every homeowner deserves the security of insurance
            coverage, and we&apos;re dedicated to breaking down barriers to make
            this a reality.
          </p>
        </div>
        <div className="max-w-[450px] columns-2 gap-8 space-y-9">
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
      <div className="mb-[120px] mx-auto flex px-24 gap-[65px] justify-center">
        <div className="basis-[530px] rounded-2xl overflow-hidden">
          <Image
            src="/about/business-man.png"
            width={530}
            height={654}
            alt="leader"
          />
        </div>
        <div className="basis-[634px]">
          <h3 className="mb-[22px] text-[21px] text-custom-red leading-[26.46px] font-semibold">
            Our Story
          </h3>
          <h2 className="mb-[22px] text-[40px] text-[#444444] font-bold leading-[50.4px]">
            We are a team built on the promise of a safe Home
          </h2>
          <p className="mb-[37px] text-base font-normal leading-[22px] text-[#5B5B5B]">
            Kolanut Africa was born out of a shared vision and a passion for
            making a positive impact on people&apos;s lives. It all began with a
            simple question: Why is home insurance so inaccessible to millions
            of Africans?
          </p>
          <p className="mb-5 text-base font-normal leading-[22px] text-[#5B5B5B]">
            As individuals who have witnessed firsthand the devastating effects
            of unexpected events on families and communities, we recognized the
            critical importance of having reliable insurance coverage. As
            individuals who have witnessed firsthand the devastating effects of
            unexpected events on families and communities, we recognized the
            critical importance of having reliable insurance coverage.
          </p>
          <p>
            Through perseverance, collaboration, and a relentless focus on our
            core values, Kolanut Africa has emerged as a beacon of hope and
            opportunity in the insurance industry. We&apos;ve overcome numerous
            challenges, navigated uncharted territories, and celebrated
            countless milestones along the way.
          </p>
        </div>
      </div>
      <div className="py-[120px] mx-auto px-24">
        <h4 className="text-center text-[21px] leading-[26.46px] text-custom-red font-semibold">
          Our Values
        </h4>
        <h2 className="max-w-[1002px] mx-auto mb-[112px] text-[#5B5B5B] text-center font-bold text-[40px] leading-[50.4px]">
          We take great pride in maintaining values that inspire us to strive
          for excellence
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16">
          <div className="relative px-6 pt-[62px] basis-[48%] rounded-2xl bg-[#F7F7F7] max-w-[612px] h-[206px] border border-[#DEDEDE]">
            <div className="absolute -top-8 bg-white px-[15.5px] py-[14px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/about/value-1.svg"
                width={31}
                height={34}
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
            <div className="absolute -top-8 bg-white p-[15px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/about/value-2.svg"
                width={32}
                height={32}
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
            <div className="absolute -top-8 bg-white px-[15px] py-[17.87px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/about/value-3.svg"
                width={34}
                height={26.5}
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
            <div className="absolute -top-8 bg-white p-[15px] rounded-2xl border border-[#DFDFDF] shadow-[0_2px_4px_0_rgba(0,0,0,0.15)]">
              <Image
                src="/about/value-4.svg"
                width={32}
                height={32}
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
      <div className="pb-[120px] mx-auto px-24">
        <h3 className="mb-[29px] text-[21px] font-semibold leading-[26.46px] text-custom-red">
          Our Team
        </h3>
        <h2 className="mb-2 text-[40px] leading-[50.4px] text-[#444444] font-bold">
          Meet our team at Kolanut Africa
        </h2>
        <h4 className="text-[18px] leading-[26px] font-medium text-[#7A7D86]">
          Get to know the talented individuals behind Kolanut Africa.
        </h4>
        <div className="mt-12">
          <div className="flex gap-6">
            <div className="basis-1/3">
              <div className="relative w-[400px] h-[469px] bg-[#FFE5E6]">
                <Image
                  className="absolute bottom-0"
                  src="/about/team-1.png"
                  width={400}
                  height={469}
                  alt="team"
                />
              </div>
              <h4 className="mt-6 mb-[10px] text-center text-[21px] leading-[26.46px] text-[#444444] font-semibold">
                Fredrik Badda
              </h4>
              <h5 className="text-[18px] text-center font-medium text-[#444444] leading-[26px]">
                CEO{" "}
              </h5>
              <p className="mt-4 mb-[22px] max-w-[383px] text-[14px] leading-[17.64px] text-center font-normal tex-[#7A7D86]">
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
            <div className="basis-1/3">
              <div className="relative w-[400px] h-[469px] bg-[#FFE5E6]">
                <Image
                  className="absolute bottom-0 left-1/2 -translate-x-1/2"
                  src="/about/team-2.png"
                  width={352}
                  height={528}
                  alt="team"
                />
              </div>
              <h4 className="mt-6 mb-[10px] text-center text-[21px] leading-[26.46px] text-[#444444] font-semibold">
                Kate Afolabi
              </h4>
              <h5 className="text-[18px] text-center font-medium text-[#444444] leading-[26px]">
                Head of Product development
              </h5>
              <p className="mt-4 mb-[22px] max-w-[383px] text-[14px] leading-[17.64px] text-center font-normal tex-[#7A7D86]">
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
            <div className="basis-1/3">
              <div className="relative w-[400px] h-[469px] bg-[#FFE5E6]">
                <Image
                  className="absolute bottom-0"
                  src="/about/team-3.png"
                  width={453}
                  height={567}
                  alt="team"
                />
              </div>
              <h4 className="mt-6 mb-[10px] text-center text-[21px] leading-[26.46px] text-[#444444] font-semibold">
                David Shaname
              </h4>
              <h5 className="text-[18px] text-center font-medium text-[#444444] leading-[26px]">
                CTO
              </h5>
              <p className="mt-4 mb-[22px] max-w-[383px] text-[14px] leading-[17.64px] text-center font-normal tex-[#7A7D86]">
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
          <button className="mt-[70px] mx-auto block px-8 py-4 text-lg font-medium leading-[22.68px] text-custom-red border border-custom-red rounded">
            See All
          </button>
        </div>
      </div>
      <div className="w-full h-[543px] bg-custom-red flex items-center justify-center flex-col">
        <h3 className="text-[40px] font-bold text-center text-white leading-[50.4px]">
          Join our team!
        </h3>
        <p className="m-2 text-white text-[18px] font-medium text-center">
          Our team is growing fast and we’re always looking for smart people.
        </p>
        <button className="mt-12 px-8 py-4 text-custom-red bg-white rounded font-medium text-[18px] leading[22.68px]">
          View all open roles
        </button>
      </div>
    </main>
  );
};

export default About;
