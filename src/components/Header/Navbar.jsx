import React from "react";
import SectionWrapper from "../SectionWrapper";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

function Navbar() {
  const navLink = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Valkiv Ai",
      path: "/valkivai",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <SectionWrapper>
      <div className="absolute z-10 w-[1250px] flex justify-between items-center px-3 pl-8  py-2 rounded-full border border-glass-border bg-gray-200/20 mt-10">
        <div>
          <Logo />
        </div>
        <div className="flex gap-10">
          {navLink.map((item, index) => (
            <div key={index}>
              <Link className="text-white" to={item.path}>{item.name}</Link>
            </div>
          ))}
        </div>
        <div className="bg-button hover:bg-button-hover rounded-full px-5 py-2 cursor-pointer">
          <Button
            variant="ghost"
            className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
          >
            <Phone />
            Kontakta Oss
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Navbar;
