import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap } from "lucide-react";

export default function ServiceSection() {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 mt-5">
      <SectionWrapper>
        <div>
          <Badge
            variant="outline"
            className="inline-flex items-center gap-3 px-3 sm:px-4 py-2 border-[#5a5a5a] rounded-full text-black font-medium text-sm sm:text-base"
          >
            <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            The Power of AI
          </Badge>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-10 mt-6">
          <div className="lg:w-[40%]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-black mb-6">
              What Does AI Mean for You?
            </h1>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:w-[60%]">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#5a5a5a]">
              AI is revolutionizing everyday life.
            </h2>
            <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed">
              With tools like ChatGPT, Gemini, and Copilot reaching over 100
              million monthly users, AI is already enhancing homes, cars,
              healthcare, and more. From smart devices to self-driving cars, its
              impact is undeniable.
            </p>
            <p className="text-base sm:text-lg text-[#5a5a5a] leading-relaxed">
              The future of AI is just beginning — and its influence will only
              grow.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row rounded-3xl p-6 sm:p-8 lg:p-12 relative overflow-hidden mt-10 items-center">
          <div className="absolute -left-24 sm:-left-20 lg:-left-32 xl:-left-40 hidden sm:block">
            <img
              src="../../../images/777149072dec6a8de7f31853002306611fe28d54.png"
              alt="AI Illustration"
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-contain"
            />
          </div>

          <div className="bg-[#181818] relative lg:ml-auto rounded-2xl p-5 sm:p-6 md:p-8 text-white w-full lg:w-[60%] xl:w-[50%]">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 font-serif text-button">
                  70+
                </div>
                <div className="max-w-40 text-[#d9d9d9] text-sm sm:text-base">
                  Global insurance companies served
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 font-serif text-button">
                  100M+
                </div>
                <div className="max-w-28 text-[#d9d9d9] text-sm sm:text-base">
                  Monthly users of AI tools
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-base sm:text-lg font-semibold mb-2">
                Text enclosing both statistics:
              </div>
              <p className="max-w-72 text-sm sm:text-base text-[#d9d9d9] leading-relaxed">
                AI is transforming the insurance sector, and Valkiv AI is
                leading the way.
              </p>
            </div>

            <div className="flex items-center mt-5 justify-between flex-wrap gap-4">
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Start using AI today
              </div>
              <div className="bg-button hover:bg-button-hover hover:rotate-145 duration-300 cursor-pointer -rotate-45 rounded-full p-2 sm:p-3">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
