import { ClientTestimonial } from "./ClientTestimonial";

import Emily from "../assets/image-emily.jpg";
import Jennie from "../assets/image-jennie.jpg";
import Thomas from "../assets/image-thomas.jpg";

export const Testimonials = () => {
  return (
    <section className="text-center desktop:py-[8rem]">
      <h2 className=" uppercase font-Fraunces pt-[5rem] pb-[5rem] tracking-[10px] text-Grayish-blue text-[1.5rem] mobile:text-[1rem] mobile:tracking-[5px] mobile:font-black">Client testimonials</h2>
      <div className=" desktop:flex desktop:w-[90%] mx-auto mobile:block mobile:w-[100%]">
        <ClientTestimonial
          Imagen={Emily}
          Text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          Nombre="Emily R."
          Job="Marketing Director"
        />
        <ClientTestimonial
          Imagen={Thomas}
          Text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          Nombre="Thomas S."
          Job="Chief Operating Officer"
        />
        <ClientTestimonial
          Imagen={Jennie}
          Text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          Nombre="Jennie F."
          Job="Business Owner"
        />
      </div>
    </section>
  );
};
