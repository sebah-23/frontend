import { FaSearch, FaUser } from "react-icons/fa";
import logo from "../../assets/image/logo.png";

function Header() {
  return (
 <header className="w-full px-16 py-6 bg-[#FAF6F2]">
   <nav className=" flex justify-between items-center " >
     <img src={logo} alt="logo" className=" w-28 cursor-pointer" />
      <div className=" hidden md:flex gap-10 font-medium ">
        <a href="#"className="cursor-pointer hover:text-amber-700 transition">Home</a>
        <a href="#"className="cursor-pointer hover:text-amber-700 transition" >Services</a>
        <a href="#"className="cursor-pointer hover:text-amber-700 transition">Agents</a>
        <a href="#"className="cursor-pointer hover:text-amber-700 transition">Contact</a>
      </div>
     
    
     <div className="flex items-center gap-5">
      <FaSearch className="cursor-pointer text-lg hover:text-amber-700 transition  " />
      <FaUser className="cursor-pointer text-lg hover:text-amber-700 transition  " />
      <button className="bg-[#2E1B12] text-white px-6 py-2 rounded-lg hover:bg-[#4B2F24] transition "> Sign up </button>
     </div>

  </nav>
 </header>
  )
}
export default Header;