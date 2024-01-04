
export const ClientTestimonial = ({Imagen, Text, Nombre, Job}) => {
  return (
    <section className=" ">
        <div className="">
            <div className="px-4 mobile:px-[6px] pt-[3rem] font-Barlow">
              <img className="mx-auto rounded-full w-[100px]" src={Imagen} alt="" />
                <p className="px-8 py-16 text-Very-dark-grayish-blue">{Text}</p>
                <h4 className=" font-Fraunces text-Very-dark-desaturated-blue font-black">{Nombre}</h4>
                <h6 className="text-Dark-grayish-blue">{Job}</h6>
            </div>
        </div>
    </section>
  );
};
