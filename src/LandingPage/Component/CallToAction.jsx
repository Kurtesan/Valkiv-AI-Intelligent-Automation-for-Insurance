import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import img1 from "/images/a2a6a702da5c362e56e0fd262c615d20c4e3d4d8.png";
import SectionWrapper from "@/components/SectionWrapper";

export default function CallToAction() {
  return (
    <main className=" relative py-20 bg-white">
      <SectionWrapper>
        <div className="overflow-hidden rounded-3xl  relative w-full h-[500px]">
          <img
            className="aspect-video w-full h-full object-cover"
            src={img1}
            alt="volkiv"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#857F6F] to-[#C4BCA6] opacity-70"></div>
        </div>

        <div className="max-w-4xl mx-auto absolute top-1/5 mt-3 left-1/4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm">
            <Info className="w-5 h-5 text-[#232222]" />
            <span className="text-[#232222] font-medium">AI Market Growth</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl  text-white font-serif font-semibold leading-tight">
            Ready to Leverage AI for Your Business?
          </h1>

          <div className="space-y-2 text-white text-lg md:text-xl font-light max-w-3xl mx-auto">
            <p>
              Global AI spending is set to grow from $235 billion in 2024 to
              over $632 billion by 2028,
            </p>
            <p>with a 29% annual growth rate.</p>
          </div>

          <p className="text-white text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Don't miss out on the opportunity to transform your business with
            AI.
          </p>

          <div className="mt-10">
            <Button className="bg-[#181818] hover:bg-[#232222] text-white px-8 py-6 text-lg rounded-full font-medium ">
              Get Started Now
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
