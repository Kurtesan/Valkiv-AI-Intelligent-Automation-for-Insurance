import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import clsx from "clsx"; 

function FaqsSection() {
  const [activeSection, setActiveSection] = useState("1");

  const accordionData = [
    {
      title: "Innovation",
      description:
        "Continuously pushing the boundaries of technology to create cutting-edge AI solutions for the insurance industry.",
      image: "/images/10ab9f8c36a2c05841da8dcc0358acf45535105f.png",
      item: "1",
    },
    {
      title: "Efficiency",
      description:
        "Streamlining insurance processes through intelligent automation, reducing processing time by up to 90% while maintaining accuracy.",
      image: "/images/10ab9f8c36a2c05841da8dcc0358acf45535105f.png",
      item: "2",
    },
    {
      title: "Scalability",
      description:
        "Built to handle enterprise-level operations, our platform scales seamlessly from small agencies to global insurance networks.",
      image: "/images/10ab9f8c36a2c05841da8dcc0358acf45535105f.png",
      item: "3",
    },
  ];

  const currentSection = accordionData.find(
    (sec) => sec.item === activeSection
  );

  return (
    <div className="bg-white my-10">
      <SectionWrapper>
        <div>
          <div>
            <Badge
              variant="outline"
              className="inline-flex items-center gap-3 px-4 py-2 border-[#5a5a5a] rounded-full text-black font-medium"
            >
              <Eye className="w-5 h-5" />
              Mission & Vision
            </Badge>

            <h1 className="text-black font-semibold mt-5 text-5xl font-serif leading-14">
              Driving the Future of Insurance with AI:
              <br />
              Our Mission & Vision
            </h1>
          </div>

          <div className="bg-white gap-16 mt-5 flex flex-col md:flex-row">
            <div className="flex-1">
              <div className="max-w-2xl">
                <div className="">
                  <p className="text-[#222222] text-lg lg:text-xl leading-relaxed font-normal">
                    Valkiv AI's mission is to transform the global insurance B2B
                    market through superintelligent, policy-trained AI-driven
                    agents and large language models (LLMs) with expertise in
                    policy analysis and automatic claims handling.
                  </p>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full mt-7"
                  value={activeSection}
                  onValueChange={setActiveSection}
                >
                  {accordionData.map((item) => (
                    <AccordionItem key={item.item} value={item.item}>
                      <AccordionTrigger

                        className={clsx(
                          "transition-colors text-lg [&>svg]:hidden",
                          activeSection === item.item
                            ? "text-black font-semibold"
                            : "text-gray-500 font-normal"
                        )}
                      >
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>{item.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="flex-1  flex items-center bg-black justify-center overflow-hidden rounded-lg">
              <div className="relative">
                {currentSection && (
                  <img
                    src={currentSection.image}
                    alt={currentSection.title}
                    className="w-[700px] object-contain  transition-all duration-500"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default FaqsSection;
