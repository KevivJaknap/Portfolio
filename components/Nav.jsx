import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";

export default function NavBar() {
  const [isOpen, setisOpen] = React.useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  const toggleOff = () => {
    setisOpen(false);
  };

  return (
    <div className="relative">
      <nav className="font-font1 flex py-2">
        <div className="grow-[10] m-2 ml-10 text-3xl">James Smith</div>
        <div className="hidden sm:flex m-2 grow-[1] text-2xl">
          <div className="px-3">
            <Link href="#about">About</Link>
          </div>
          <div className="px-3">
            <Link href="#contact">Contact</Link>
          </div>
        </div>
        <div className="sm:hidden">
          <div className="flex grow-[1] m-3 mr-10">
            <button
              type="button"
              id="dropdowndefault"
              className=""
              onClick={toggle}
              onBlur={toggleOff}
            >
              <Image
                src="/../public/icons8-menu-50.png"
                alt="pic"
                width={30}
                height={30}
              />
            </button>
          </div>
          {isOpen && (
            <div
              className="border-2 border-black absolute top-12 right-10 text-xl"
              id="dropdown"
            >
              <ul className="">
                <li className="hover:bg-zinc-200">
                  <a href="/about" className="px-3">
                    About
                  </a>
                </li>
                <li className="hover:bg-zinc-200">
                  <a href="/contact" className="px-3">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
