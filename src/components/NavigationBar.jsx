import { Button, Navbar, Typography } from "@material-tailwind/react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"


const NavigationBar = () => {
  return (
    <Navbar fullWidth className="bg-[#030712] border-none shadow-md px-3">
      <div className="px-16 mx-auto">
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <div>
            <Typography variant="h2" className="text-[#33CCCC]">Logo</Typography>
          </div>
          {/* nav */}
          <ul className="lg:flex gap-6 items-center font-semibold text-xl text-white hidden">
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link>Services</Link>
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link>About</Link>
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link>Testimonials</Link>
            </li>
            <li className="hover:text-[#33CCCC] cursor-pointer transition-all">
              <Link>Contact Us</Link>
            </li>
            <Button variant="filled" className="bg-[#33CCCC] shadow-none text-white rounded-md">Get Started</Button>
          </ul>
          <Menu className="lg:hidden text-white"/>
        </div>
      </div>

    </Navbar>
  )
}

export default NavigationBar