import { ImagesMix } from "./ImagesMix";

import ImgLeche from "../assets/desktop/image-gallery-milkbottles.jpg";
import ImgOrage from "../assets/desktop/image-gallery-orange.jpg";
import ImgCone from "../assets/desktop/image-gallery-cone.jpg";
import ImgSugar from "../assets/desktop/image-gallery-sugarcubes.jpg";

export const ImagesMixApp = () => {
  return (
    <section className=" desktop:flex mobile:grid mobile:grid-cols-2">
      <ImagesMix order="order-1" Images={ImgLeche} />
      <ImagesMix order="order-2" Images={ImgOrage} />
      <ImagesMix order="order-3" Images={ImgCone} />
      <ImagesMix order="order-4" Images={ImgSugar} />
    </section>
  );
};
