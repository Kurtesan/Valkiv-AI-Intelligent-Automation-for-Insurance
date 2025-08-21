import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function HealingPath() {
  const [activeSection, setActiveSection] = useState(2);

  const sections = [
    {
      id: 1,
      title: "Analyze Data",
      description:
        "Leverage AI-powered analytics to understand your business patterns and make informed decisions.",
      image: "../../../images/1.jpg",
    },
    {
      id: 2,
      title: "Automate Processes",
      description:
        "Streamline your business operations with intelligent automation and workflow optimization.",
      image: "../../../images/2.jpg",
    },
    {
      id: 3,
      title: "Minimize Risks",
      description:
        "Reduce the chances of being underinsured or double-insured with efficient management.",
      image: "../../../images/3.jpg",
    },
  ];

  return (
    <div className="py-20 bg-[#181818] text-white">
      <SectionWrapper>
        <div className="flex items-center w-max gap-2 px-4 py-2 border border-gray-600 rounded-full bg-gray-800/50">
          <Sparkles className="w-4 h-4 text-gray-300" />
          <span className="text-sm text-gray-300 font-medium">
            AI for Business
          </span>
        </div>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
            How Valkiv AI can help SME & Enterprise
          </h1>
          <div className="flex items-center gap-3">
            <div>
              <div className="text-lg font-medium">Optimize your</div>
              <div className="text-lg font-medium">insurance</div>
            </div>
            <div className="bg-button hover:bg-button-hover hover:rotate-145 duration-300 cursor-pointer -rotate-45 rounded-full p-3">
              <ArrowRight className="w-6 h-6 text-[#000000]" />
            </div>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute top-6 right-6 z-10 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-sm font-medium">{activeSection + 1}:3</span>
            </div>

            <div className="flex md:flex-row flex-col h-[600px] md:h-[600px]">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  onClick={() => setActiveSection(index)}
                  className={`relative cursor-pointer transition-all duration-700 ease-in-out overflow-hidden
                    ${
                      activeSection === index
                        ? "md:flex-[2] flex-[0.8]"
                        : "md:flex-[0.5] flex-[0.2]"
                    }
                    ${
                      activeSection === index
                        ? "h-[70%] md:h-auto"
                        : "h-[15%] md:h-auto"
                    }
                  `}
                >
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="w-full h-full object-cover brightness-75"
                  />

                  <div className="absolute top-1/3 px-10 z-20">
                    <span className="text-[120px] md:text-[200px] leading-none font-serif text-white">
                      {section.id}
                    </span>
                  </div>

                  {activeSection === index && (
                    <div className="absolute bottom-8 left-6 right-6 md:bottom-16 md:left-16 md:right-16 z-10 animate-in fade-in duration-500">
                      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white">
                        {section.title}
                      </h2>
                      <p className="text-sm md:text-lg text-gray-200 max-w-2xl">
                        {section.description}
                      </p>
                    </div>
                  )}

                  {activeSection !== index && (
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
