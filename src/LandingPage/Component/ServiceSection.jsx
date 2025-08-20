import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="bg-white p-8 mt-5">
      <SectionWrapper className="">
        <div className="">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-3 px-4 py-2 border-[#5a5a5a] rounded-full text-black font-medium"
          >
            <Zap className="w-5 h-5" />
            The Power of AI
          </Badge>
        </div>

        <div className="flex justify-between gap-10 mt-6 ">
          <div className="w-[1000px]">
            <h1 className=" text-6xl font-serif lg:text-7xl font-bold text-black mb-8">
              What Does AI Mean for You?
            </h1>
          </div>

          <div className="space-y-6 ">
            <h2 className="text-2xl font-semibold text-[#5a5a5a]">
              AI is revolutionizing everyday life.
            </h2>
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              With tools like ChatGPT, Gemini, and Copilot reaching over 100
              million monthly users, AI is already enhancing homes, cars,
              healthcare, and more. From smart devices to self-driving cars, its
              impact is undeniable.
            </p>
            <p className="text-lg text-[#5a5a5a] leading-relaxed">
              The future of AI is just beginning — and its influence will only
              grow.
            </p>
          </div>
        </div>

        <div className="flex rounded-3xl p-8 lg:p-12 relative overflow-hidden h-96 mt-10 items-center">
          <div className="absolute overflow-hidden -left-20 rounded-3xl">
            <div className=" ">
              <img
                src="../../../images/777149072dec6a8de7f31853002306611fe28d54.png"
                alt=""
                className="h-[600px]"
              />
            </div>
          </div>

          <div className="bg-[#181818] absolute right-0 rounded-2xl p-6  text-[#ffffff]">
            <div className="grid grid-cols-2 gap-5 ">
              <div>
                <div className="text-5xl font-bold mb-2 text-button font-serif">
                  70+
                </div>
                <div className=" max-w-40 text-[#d9d9d9]">
                  Global insurance companies served
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-button font-serif">
                  100M+
                </div>
                <div className=" max-w-28 text-[#d9d9d9]">
                  Monthly users of AI tools
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-lg font-semibold mb-2">
                Text enclosing both statistics:
              </div>
              <p className="max-w-72 text-sm text-[#d9d9d9] leading-relaxed">
                AI is transforming the insurance sector, and Valkiv AI is
                leading the way.
              </p>
            </div>

            <div className="flex items-center mt-5 justify-between">
              <div className="text-2xl font-semibold">Start using AI today</div>
              <div className="bg-button hover:bg-button-hover hover:rotate-145 duration-300 cursor-pointer -rotate-45 rounded-full p-3">
                <ArrowRight className="w-6 h-6 text-[#000000]" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
