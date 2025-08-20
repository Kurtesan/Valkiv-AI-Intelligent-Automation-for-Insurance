import SectionWrapper from "@/components/SectionWrapper";
import { TrendingUp, ArrowUpRight, CheckCircle } from "lucide-react";

export default function AboutUS() {
  const stats = [
    {
      icon: <TrendingUp className="w-4 h-4" />,
      label: "Explosive Growth",
      value: "$235B",
      description: "Global AI Spending Projection For 2024.",
    },
    {
      icon: <ArrowUpRight className="w-4 h-4" />,
      label: "Momentum",
      value: "29%",
      description:
        "Annual Compound Growth Rate (CAGR) Of AI Investment Until 2028.",
    },
    {
      icon: <CheckCircle className="w-4 h-4" />,
      label: "Efficiency",
      value: "90%",
      description: "Reduction In Claim Processing Time.",
    },
  ];

  return (
    <div className=" bg-[#181818] text-white p-8 lg:p-16">
      <SectionWrapper className="">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight">
              The Impact Of AI On The Insurance Industry
            </h1>
          </div>

          <div className="flex items-center">
            <p className="text-lg lg:text-xl text-[#fbfbfb] leading-relaxed">
              AI is transforming the insurance sector by boosting efficiency,
              reducing costs, and unlocking immense market potential. Here are
              key statistics that highlight its impact.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-black transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6 ">
                <div className="inline-flex items-center gap-2 bg-[#e1d7be] px-4 py-2 rounded-full text-sm font-medium">
                  {stat.icon}
                  {stat.label}
                </div>
              </div>
              <div className="mb-4">
                <span className="text-6xl font-serif lg:text-7xl font-bold">
                  {stat.value}
                </span>
              </div>
              <p className="text-[#1f2937] text-base leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
