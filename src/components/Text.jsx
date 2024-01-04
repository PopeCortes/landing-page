export const Text = ({order, title, text, color }) => {
  return (
    <div className={`${order} mobile:px-6 text-center h-[437px] flex flex-col place-content-around px-6 py-6 tablet:h-auto lg:px-[65px] desktop:text-left pl-[165px] desktop:py-[140px] desktop:pr-[105px] desktop:leading-tight `}>
      <h2 className="font-Fraunces text-[2rem] font-black tablet:font-[1.25rem] lg:text-[2.5rem]">{title}</h2>
      <p className="font-Barlow text-Very-dark-grayish-blue font-[1.25rem] leading-[1.875rem] tablet:font-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px]">{text}</p>
      <div className="relative">
      <button className=" uppercase font-Fraunces">Learn More</button>
      <div className={`w-[137px] h-[10px] ${color} rounded-full absolute bottom-[2px] left-0 right-0 mx-auto -z-10 bg-opacity-30 desktop:mx-0 desktop:left-[-10px] desktop:bottom-[-1px]`}></div>
      </div>
    </div>
  );
};
