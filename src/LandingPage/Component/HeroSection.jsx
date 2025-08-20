import React from "react";
import heroImage from "/images/hero_bg img.jpg";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

function HeroSection() {
  return (
    <div className="relative  ">
      <div className="brightness-50 ">
        <img className="" src={heroImage} alt="volkiv" />
      </div>
      <SectionWrapper>
        <div className="absolute flex items-end  justify-between  bottom-1/4 ">
          <div className="max-w-2xl  text-white">
            <h1 className="text-6xl font-serif ">
              Revolutionizing the Insurance Industry with Artificial
              Intelligence
            </h1>
            <div className="mt-7">
              <p className="font-bold text-2xl">
                Empower your insurance business with advanced AI solutions
              </p>
              <p className="mt-5 max-w-xl">
                Automate policy management and claims processing, reducing
                costs, improving efficiency, and enhancing accuracy in
                real-time. With Valkiv AI, optimize your operations to adapt to
                the future of the insurance industry.
              </p>
              <div className="group bg-button  text-black hover:bg-button-hover rounded-full px-4 py-2 mt-10 cursor-pointer transition-all duration-500 ease-in-out w-[150px] hover:w-[170px]">
                <Button
                  variant="ghost"
                  className="bg-transparent cursor-pointer hover:bg-transparent active:bg-transparent focus:bg-transparent flex items-center gap-2 transition-all duration-500 ease-in-out"
                >
                  Contact Us
                  <MoveRight className="transition-transform duration-500 ease-in-out group-hover:translate-x-6" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-glass/60 rounded-2xl text-white border border-glass-border p-10 ">
            <p className="text-4xl max-w-xs">Why choose ValKiv AI?</p>

            <div className="flex flex-col max-w-xs gap-2 mt-5">
              <p className="">
                <span className="font-semibold">• Boast Efficiency</span> :
                Automate claims processing and reduce turnaround time
              </p>
              <p className="">
                <span className="font-semibold">• Boast Efficiency</span> :
                Automate claims processing and reduce turnaround time
              </p>
              <p className="">
                <span className="font-semibold">• Boast Efficiency</span> :
                Automate claims processing and reduce turnaround time
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default HeroSection;
