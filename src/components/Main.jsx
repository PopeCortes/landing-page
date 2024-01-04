import imgMobile from "../assets/mobile/image-header.jpg";
import imgDesktop from "../assets/desktop/image-header.jpg";
import arrow from "../assets/icon-arrow-down.svg";

export const Main = () => {
  return (
    <section>
      <picture>
        <source media="(max-width:639px)" srcSet={imgMobile} />

        <source media="(min-width:640px)" srcSet={imgDesktop} />

        <img src={imgMobile} alt="background header" />
      </picture>

      <p className="absolute top-[144px] w-[327px] uppercase tracking-[6.25] font-Fraunces text-white text-[40px] left-0 right-0 mx-auto text-center sm:w-[600px]">
        We are creatives
      </p>
      <img
        src={arrow}
        className=" absolute top-[300px] left-0 right-0 mx-auto text-center sm:top-[200px] md:top-[200px] lg:top-[255px] xl:top-[350px] 2xl:top-[420px]"
        alt=""
      />
    </section>
  );
};
