import React, { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Phone, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLink = [
    { name: "About", path: "/" },
    { name: "Valkiv Ai", path: "/valkivai" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="bg-gray-100 z-20 w-full">
      <SectionWrapper>
        <div className="relative z-10  flex justify-between items-center px-6 lg:py-3 md:py-2 py-1 rounded-full border border-glass-border bg-gray-200/20 mt-6 mx-auto">
          <div>
            <Logo />
          </div>

          <div className="hidden md:flex gap-10">
            {navLink.map((item, index) => (
              <Link
                key={index}
                className="text-white hover:text-gray-300"
                to={item.path}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block bg-button hover:bg-button-hover rounded-full px-5 py-2 cursor-pointer">
            <Button
              variant="ghost"
              className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
            >
              <Phone className="mr-2" />
              Kontakta Oss
            </Button>
          </div>

          <div className="md:hidden ">
            <Button
              variant="ghost"
              size={''}
              className={"bg-transparent hover:bg-transparent text-button hover:text-button-hover "}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-10 h-10" />
              ) : (
                <Menu className="w-16 h-16" />
              )}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-20 left-0 w-full  bg-gray-900/90  flex flex-col items-center gap-6 py-6 md:hidden z-20 rounded-lg">
            {navLink.map((item, index) => (
              <Link
                key={index}
                className="text-lg text-white hover:text-gray-300"
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className=" bg-button hover:bg-button-hover rounded-full px-5 py-2 cursor-pointer">
              <Button
                variant="ghost"
                className="bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent"
              >
                <Phone className="mr-2" />
                Kontakta Oss
              </Button>
            </div>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}

export default Navbar;
