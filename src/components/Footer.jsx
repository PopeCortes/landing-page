export const Footer = ({li, Images}) => {
  return (
    <footer>
        <ul>
            <li>{li}</li>
        </ul>
        <div className="">
            <ul className="flex justify-center">
                <li className=""><img src={Images} alt="" /></li>
            </ul>
        </div>
    </footer>
  )
}
