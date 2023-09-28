import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="mb-[3rem] mt-[6rem]">
      <div className="text-center">
        <div><h2 className="text-[3.5rem] font-[700] text-[#62C3E7]">i<span className="text-[#F195B2] pl-0">CREAM</span></h2></div>
        <div className="text-center flex justify-center text-[#62C3E7] my-[1.5rem]">
                    <a href="#" className="mr-4 text-[1.5rem]"><FaTwitter/></a>
                    <a href="#" className="mr-4 text-[1.5rem]"><FaFacebookF/></a>
                    <a href="#" className="mr-4 text-[1.5rem]"><FaLinkedinIn/></a>
                    <a href="#" className="mr-4 text-[1.5rem]"><FaInstagram/></a>
                </div>
        <div className="flex md:flex-row flex-col items-center md:justify-center mt-[3rem] mb-[3rem]">
          <div className="w-56 md:text-end md:pr-3 md:border-r-[1px]">
            <h4 className="font-[700] text-[1.25rem] pb-1">Get In Touch</h4>
            <p className="pb-1 text-[#6c757d]">123 Street, New York, USA</p>
            <p className="text-[#6c757d]">+012 345 67890</p>
          </div>
          <div className="w-56 md:text-start md:pl-3 mt-4 md:mt-0">
            <h4 className="font-[700] text-[1.25rem] pb-1">Opening Hours</h4>
            <p className="pb-1 text-[#6c757d]">Mon - Sat, 8AM - 5PM</p>
            <p className="text-[#6c757d]">Sunday: Closed</p>
          </div>
        </div>
        <div>
          <p>©<span className="text-[#F195B2]">Domain</span>. All Rights Reserved. Designed by <span className="text-[#F195B2]">HTML Codex</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer