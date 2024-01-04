import { Footer } from "./Footer";

import ImgFacebook from "../assets/icon-facebook.svg";
import ImgInstagram from "../assets/icon-instagram.svg";
import ImgTwitter from "../assets/icon-twitter.svg";
import ImgPinterest from "../assets/icon-pinterest.svg";

export const ElementFooter = () => {
  return (
    <div className="bg-footerColor text-center">
        <h1 className="text-Dark-desaturated-cyan font-black text-[2rem] pt-[3rem]">sunnyside</h1>
      <div className="flex justify-between mx-auto py-[3rem] mobile:px-5 mobile:w-full desktop:w-[400px] text-Dark-desaturated-cyan font-Barlow">
        <Footer li="About" />
        <Footer li="Services" />
        <Footer li="Proyects" />
      </div>
      <div className="flex justify-between w-[270px] mobile:px-10 pb-[5rem] mx-auto">
        <Footer Images={ImgFacebook} />
        <Footer Images={ImgInstagram} />
        <Footer Images={ImgTwitter} />
        <Footer Images={ImgPinterest} />
      </div>
    </div>
  );
};
