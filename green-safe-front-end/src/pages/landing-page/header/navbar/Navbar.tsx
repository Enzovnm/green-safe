import { Route } from "../routes";
import Logo from "../../../../assets/agriculture-logo.svg?react";
import { useState } from "react";
import Hamburger from "hamburger-react";
interface NavbarProps {
  routes: Route[];
}

export const Navbar = ({ routes }: NavbarProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-between lg:px-0 items-center p-4">
        <div className="w-60">
          <Logo />
        </div>

        <div className="lg:hidden">
          <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="hidden lg:flex lg:start">
          <ul className="flex lg:gap-8 items-center">
            {routes.map((route) => {
              const { title, href } = route;
              return (
                <li key={title}>
                  <a className="hover:opacity-80 duration-300" href={href}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex items-center">
          <a className="mr-8 hover:opacity-80 duration-300" href="#">
            Login
          </a>
          <button
            type="submit"
            className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Cadastre-se
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 lg:hidden">
          <ul className="w-full">
            {routes.map((route) => {
              const { title, href } = route;
              return (
                <li
                  className="p-4 relative after:absolute after:w-full after:left-0 after:border after:bottom-0"
                  key={title}
                >
                  <a href={href}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};
