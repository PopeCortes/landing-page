export const ImageText = ({order, imgMobile, imgDesktop, title, text, titlecolor}) => {
  return (
    <div className={`${order} relative`}>
      <picture >
        <source srcSet={imgMobile} media="(max-width:639px)" type="" />
        <source srcSet={imgDesktop} media="(min-width:640px)" type="" />
        <img src={imgMobile} alt="Image Mobile service" />
      </picture>
      <div className=" mobile:absolute xl:w-[380px] xl:px-5 xl:left-0 xl:right-0 xl:mx-auto md:bottom-4  mobile:z-10 mobile:bottom-9 mobile:text-center mobile:px-3 desktop:absolute desktop:w-[350px] desktop:text-center desktop:left-0 desktop:right-0 desktop:mx-auto desktop:py-[50px] desktop:block desktop:bottom-0 ">
      <h2 className={`font-Fraunces font-black desktop:text-[1.7rem] py-[2rem] md:py-3 mobile:text-[1.5rem] ${titlecolor} `}>{title}</h2>
      <p className="text-Dark-desaturated-cyan font-Barlow">{text}</p>
      </div>
    </div>
  );
};
