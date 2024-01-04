

export const ImagesMix = ({Images, order}) => {
  return (
    <section className="flex overflow-hidden ">
        <img className={`${order} mobile:w-[190px] mobile:object-contain desktop:w-full`} src={Images} alt="" />
    </section>
  )
}
