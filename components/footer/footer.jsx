import Image from "next/image";

const Footer = () => {
    return(
        <footer className="pt-[120px] px-24 text-white bg-[#282828] min-h-[523px]">
            <div className="flex justify-between">
                <div>
                    <div className="mb-8">
                        <Image src="/footer-logo.svg" width={63} height={27} alt="logo" />
                    </div>
                    <ul className="flex gap-8 mb-[70px] text-lg leading-[22.68px] font-medium">
                        <li>About</li>
                        <li>Services</li>
                        <li>Insurance plans</li>
                        <li>FAQs</li>
                    </ul>
                    <ul className="flex gap-[18.07px]">
                        <li className="w-[24.92px] h-[24.92px] pt-[2.33px] pr-[2.07px] pb-[1.92px] pl-[2.08px]">
                            <a href="#">
                                <Image src="/social-icon/facebook.svg" width={20.77} height={20.77} alt="facebook"/>
                            </a>
                        </li>
                        <li className="w-[24.92px] h-[24.92px] pt-[3.37px] pr-[3.12px] pb-[2.86px] pl-[3.11px]">
                        <a href="#">
                                <Image src="/social-icon/instagram.svg" width={18.69} height={18.69} alt="instagram"/>
                            </a>
                        </li>
                        <li className="w-[24.92px] h-[24.92px] pt-[4.4px] pr-[3.12px] pb-[3.9px[ pl-[3.11px]">
                        <a href="#">
                                <Image src="/social-icon/x.svg" width={18.69} height={16.61} alt="x"/>
                            </a>
                        </li>
                        <li className="w-[24.92px] h-[24.92px] pt-[3.37px] pr-[3.12px] pb-[2.86px] pl-[3.11px]">
                        <a href="#">
                                <Image src="/social-icon/linkedin.svg" width={18.69} height={18.69
                                } alt="linkedin"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-[32px] font-bold leading-[42px]">Stay in the loop</h3>
                  <div className="flex gap-4">
                    <input className="w-[232px h-[45px] p-3 rounded" type="text"/>
                    <button className="px-8 py-[11] rounded text-lg bg-custom-red w-[152px] h-[45px]">Subscribe</button>
                  </div>
                  <p>By subscribing you agree to with our Privacy Policy</p>
                </div>    
            </div>
        </footer>
    )
}

export default Footer;