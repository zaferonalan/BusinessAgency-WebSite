import { Button, Typography } from "@material-tailwind/react"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion";


const NavigationBar = () => {
  const [open, setOpen] = useState(false)

  const NavbarHandler = () => {
    setOpen(!open)
    if (open) {
      document.body.style.overflow = 'unset';
    }else{
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <div className="bg-[#030712] w-full py-5 border-none shadow-md px-3">
      <div className="lg:px-16 mx-auto">
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <div>
            <Typography variant="h2" className="text-[#33CCCC]">Logo</Typography>
          </div>
          {/* nav */}
          <ul className="lg:flex gap-6 items-center font-semibold text-xl text-white hidden">
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link to={"#services"}>Services</Link>
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link to={"#about"}>About</Link>
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link to={"#tesimonials"}>Testimonials</Link>
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link to={"#contactus"}>Contact Us</Link>
            </li>
            <Button variant="filled" className="bg-[#33CCCC] shadow-none text-white rounded-md">Get Started</Button>
          </ul>
          <Menu onClick={NavbarHandler} className="lg:hidden text-white h-10 w-10"/>
        </div>
      </div>
      {
        open ? (
          <nav className="lg:hidden ">
            <ul className="z-50 flex flex-col border-l border-[#33CCCC] space-y-10 bg-black text-gray-300 w-[300px] h-[950px] items-center pt-36 text-2xl font-semibold border-x-red-300 top-0 absolute right-0">
              <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
                <Link to={"#services"}>Services</Link>
              </li>
              <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
                <Link to={"#about"}>About</Link>
              </li>
              <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
                <Link to={"#tesimonials"}>Testimonials</Link>
              </li>
              <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
                <Link to={"#contactus"}>Contact Us</Link>
              </li>
              <Button variant="filled" className="bg-[#33CCCC] shadow-none text-white rounded-md">Get Started</Button>
              <X onClick={NavbarHandler} className="z-50 absolute top-0 right-10 border border-[#33CCCC] p-1 rounded-md"/>
            </ul>
          </nav>
        ):null
      }
    </div>
  )
}

export default NavigationBar