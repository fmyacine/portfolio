import * as React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full h-14 md:h-16 bg-gray-950 flex flex-row items-center justify-between z-30 backdrop-filter backdrop-blur-md bg-opacity-30">
      <div className="flex flex-row items-center mx-4">
        <a href="https://libyzxy0.com" className="text-2xl md:text-3xl font-semibold tracking-tight text-white flex flex-row">
          <p className="text-sky-300">FM </p>Yacine
        </a>
      </div>
      <div className="flex flex-row items-center mx-3">
        <a href="https://www.linkedin.com/in/mohamed-yacine-fedlallah/" className="text-white text-xl md:text-2xl  mx-1.5 hover:text-sky-400 transition-all duration-300">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/fm.yacine/" className="text-white text-xl md:text-2xl mx-1.5 hover:text-sky-400 transition-all duration-300">
          <FaInstagram />
        </a>
        <a href="https://github.com/fmyacine" className="text-white text-xl md:text-2xl mx-1.5 hover:text-sky-400 transition-all duration-300">
          <FaGithub />
        </a>

        <DropdownMenu>
          <DropdownMenuTrigger className="text-white text-xl md:text-2xl ml-2 mr-1.5 outline-none border-none">
            <HiOutlineMenuAlt3 />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-900 border-none text-white mx-3 my-3">
            <DropdownMenuLabel>Go To</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-800" />
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#"
              >
            <DropdownMenuItem>
                Start
            </DropdownMenuItem>
              </a>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#about"
                >
            <DropdownMenuItem>
                About
            </DropdownMenuItem>
            </a>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#skills"
                >
            <DropdownMenuItem>
                Skills
            </DropdownMenuItem>
            </a>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#experience"
                >
              <DropdownMenuItem>
                Experience
            </DropdownMenuItem>
            </a>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#education"
                >
            <DropdownMenuItem>
                Education
            </DropdownMenuItem>
            </a>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#projects"
              >
            <DropdownMenuItem>
                Projects
            </DropdownMenuItem>
              </a>
              <a
                className="hover:text-sky-400 transition-all duration-300"
                href="#contact"
                >
            <DropdownMenuItem>
                Contact
            </DropdownMenuItem>
            </a>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export { Navbar };
