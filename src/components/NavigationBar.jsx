import { Navbar, Typography } from "@material-tailwind/react"

const NavigationBar = () => {
  return (
    <Navbar fullWidth className="bg-[#030712] px-3">
      <div className="px-16 border-2 mx-auto">
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <div>
            <Typography variant="h2" className="text-[#33CCCC]">Logo</Typography>
          </div>
          {/* nav */}
          <nav>
            
          </nav>
        </div>
      </div>

    </Navbar>
    // <div className="bg-[#030712] py-3 px-5">
    //   <div className="mx-auto">
    //     <div className="flex justify-between items-center px-5">
    //       {/* Logo */}
    //       <div>
    //         <Typography variant="h3" className="text-[#33CCCC]">Logo</Typography>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default NavigationBar