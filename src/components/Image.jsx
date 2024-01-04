

export const Image = ({order,imgMobile, imgDesktop}) => {
  return (
    <picture className={order}>
        <source srcSet={imgMobile} media="(max-width:639px)" type="" />
        <source srcSet={imgDesktop} media="(min-width:640px)" type="" />

        <img src={imgMobile} alt="Image Mobile service" />
    </picture>
  )
}
