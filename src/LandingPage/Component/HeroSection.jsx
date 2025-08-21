import React from "react";
import heroImage from "/images/hero_bg img.jpg";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

function HeroSection() {
  return (
    <section className=" h-full flex items-center  justify-center text-white">
      <div className="absolute  inset-0">
        <img
          className="w-full h-[70rem] object-cover brightness-50"
          src={heroImage}
          alt="valkiv"
        />
      </div>

      <SectionWrapper>
        <div className="relative lg:py-24 md:py-16 py-10 flex md:flex-row lg:flex-row flex-col justify-between items-center gap-10 text-center lg:text-left">
          <div className="max-w-4xl ">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif leading-tight">
              Revolutionizing the Insurance Industry with Artificial
              Intelligence
            </h1>
            <p className="font-bold text-base md:text-lg lg:text-2xl mt-6">
              Empower your insurance business with advanced AI solutions
            </p>
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
              Automate policy management and claims processing, reducing costs,
              improving efficiency, and enhancing accuracy in real-time. With
              Valkiv AI, optimize your operations to adapt to the future of the
              insurance industry.
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

          <div className="bg-glass/60 backdrop-blur-md rounded-2xl border border-glass-border p-5 lg::p-8 ">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Why choose Valkiv AI?
            </p>
            <ul className="flex flex-col gap-3 text-sm sm:text-base">
              <li>
                <span className="font-semibold">• Boost Efficiency:</span>{" "}
                Automate claims processing and reduce turnaround time
              </li>
              <li>
                <span className="font-semibold">• Reduce Costs:</span> Cut
                manual work with AI-driven automation
              </li>
              <li>
                <span className="font-semibold">• Enhance Accuracy:</span>{" "}
                Improve decision-making with data insights
              </li>
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default HeroSection;
