import { Button, Typography } from "@material-tailwind/react";
import bg from "../assets/bg1.jpg";
import { ChevronRight } from "lucide-react";

// shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]

const Hero = () => {
  return (
    <div className=" h-[600px] bg-cover bg-center relative z-10">
      <img 
      src={bg} 
      alt="Background" 
      className="absolute inset-0 w-full h-full object-cover z-[-1]" 
      />
      <div className='absolute inset-0 bg-black bg-opacity-85'></div>
        <div className='relative max-w-7xl mx-auto'>
          <div className="flex lg:h-[650px] justify-center items-center lg:pt-0 pt-20">
            <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
              <Typography variant="h3" className="lg:text-xl text-white">Digital Marketing Agency____</Typography>
              <Typography variant="h1" className="lg:text-6xl text-white">Grow Your Business with Digital <br /> <span className="text-[#33CCCC]">Marketing solution!</span></Typography>
              <Typography variant="paragraph" className="text-gray-200">Unlock the power of digital marketing to grow your business. Our expert strategies drive results and maximize your online potential.</Typography>
              <div className="flex gap-3 items-center">
                <Button variant="filled" className="bg-[#33CCCC] text-white px-4 py-2 border-2 font-semibold flex items-center">Get Started <ChevronRight /></Button>
                <Button variant="outlined" className="rounded-md px-4 bg-transparent text-white border-2 border-green-200 shadow-[0_0_50px_5px_rgba(51,_204,_204,_0.7)]">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero