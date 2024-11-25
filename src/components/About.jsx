import { Button, Typography } from "@material-tailwind/react"
import AboutImg from "../assets/AboutImg.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const About = () => {
    const [counterOn, setCounterOn] = useState(false)
  return (
    <div className="bg-[#030712] py-20 px-5 md:px-0 overflow-x-hidden overflow-y-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-7 items-center">
                <div className="md:w-1/2 space-y-5">
                    <div>
                        <Typography variant="h1" className="text-[#33CCCC]">About Us</Typography>
                    </div>
                    <div>
                        <Typography variant="paragraph" className="text-gray-300">
                            Welcome to Webelite Builders, where we blend creativity, strategy, 
                            and technology to help businesses excel in the digital landscape. 
                            Founded in 2024, we are a young and dynamic digital marketing agency based in 
                            Kolkata, dedicated to delivering results-driven solutions tailored to your 
                            unique business goals. Our mission is simple – to empower brands with powerful 
                            digital strategies that elevate online presence, engage audiences, and drive 
                            sustainable growth.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="paragraph" className="text-gray-300">
                            Whether you’re a startup or an established brand, we are here to help you navigate 
                            the digital world, maximizing your potential with solutions that make an impact. 
                            Let us build your digital success story.
                        </Typography>
                    </div>
                    <div>
                        <Button variant="outlined" className="mt-4 rounded-md bg-transparent text-white border-2 border-green-200 shadow-[0_0_50px_5px_rgba(51,_204,_204,_0.7)]">Learn More</Button>
                    </div>
                </div>
                <div className="md:w-1/2 space-y-5">
                    <img src={AboutImg} alt="" className="rounded-lg" />
                </div>
            </div>
            <div className="mt-12">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                    <div className="flex gap-10">
                        <div className="flex flex-col items-center text-center">
                            <Typography variant="h1" className="md:text-4xl text-[#33CCCC]">
                                {
                                    counterOn && <CountUp start={0} end={120} duration={2} delay={0}/>
                                }
                                +
                            </Typography>
                            <Typography variant="h3" className="text-sm text-gray-300">Happy Customers</Typography>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Typography variant="h1" className="md:text-4xl text-[#33CCCC]">
                                {
                                    counterOn && <CountUp start={0} end={200} duration={2} delay={0}/>
                                }
                                +
                            </Typography>
                            <Typography variant="h3" className="text-sm text-gray-300">Success Projects</Typography>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Typography variant="h1" className="md:text-4xl text-[#33CCCC]">
                                {
                                    counterOn && <CountUp start={0} end={160} duration={2} delay={0}/>
                                }
                                %
                            </Typography>
                            <Typography variant="h3" className="text-sm text-gray-300">Conversion Rate Increased</Typography>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    </div>
  )
}

export default About