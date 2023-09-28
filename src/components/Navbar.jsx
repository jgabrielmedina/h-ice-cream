import Link from "next/link"
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
    return (
        <div>
        <nav className="bg-[#F195B2] box-border hidden md:block">
            <div className="  w-[80%] m-auto pt-4 relative top-3">
                    <div className="flex justify-end ">
                        <a className="text-white px-3" href="">
                            <FaFacebookF/>
                        </a>
                        <a className="text-white px-3 " href="">
                            <FaTwitter/>
                        </a>
                        <a className="text-white px-3" href="">
                            <FaLinkedinIn/>
                        </a>
                        <a className="text-white px-3" href="">
                            <FaInstagram/>
                        </a>
                        <a className="text-white pl-3" href="">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>

            <div className="relative top-[42px] bg-white flex items-center max-w-[1108px] m-auto rounded-[60px] justify-evenly shadow-[0_8px_16px_rgba(0,0,0,0.3)] z-10">
                <div className="flex">
                    <ul>
                        <li className="font-[500] py-[10px] px-[15px] text-[17px] hover:text-[#F195B2]">
                            <Link href="/">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="font-[500] py-[10px] px-[15px] text-[17px] hover:text-[#F195B2]">
                            <Link href="">About</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="font-[500] py-[10px] px-[15px] text-[17px] hover:text-[#F195B2]">
                            <Link href='/products'>Product</Link>
                        </li>
                    </ul>
                </div>

                <h1 className="font-[700] text-[3.5rem] text-[#F195B2]"><span className="text-[#62C3E7]">HELLO!</span> Ice Roll</h1>

                <div className="flex">
                    <ul>
                        <li className="font-[500] py-[10px] px-[15px] text-[17px] hover:text-[#F195B2]">
                            <Link href=''>Service</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="font-[500] py-[10px] px-[15px] text-[17px] hover:text-[#F195B2]">
                            <Link href=''>Gallery</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="font-[500] py-[10px] px-[15px] text-[17px] hover:text-[#F195B2]">
                            <Link href=''>Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>  
        </nav>
        <nav className="md:hidden">
           <div>
            <div className="flex items-center justify-between py-2 px-4">
                <Link href="/" className="py-1 mr-4 text-[2rem]"><h1 className="text-[#F195B2] font-[800]"><span className="text-[#62C3E7]">i</span>HELLO</h1></Link>
                <button type="button" className="py-1 px-3 border text-[2rem] rounded text-gray-500">
                    <HiBars3/>
                </button>
            </div>
           </div>
        </nav>
        </div>
    )
}

export default Navbar