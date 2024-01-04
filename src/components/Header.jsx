import logo from '../assets/logo.svg';
import Navbar from './Navbar';

export const Header = () => {
  return (
    <header className=' max-w-[1440px] absolute w-full px-6 pt-8 flex place-content-between font-Barlow '>
        <img src={logo} className="sm:object-contain" alt="" />
        <Navbar/>
    </header>
  )
}
