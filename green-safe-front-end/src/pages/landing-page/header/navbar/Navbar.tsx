import { Route } from "../routes";
import Logo from "../../../../assets/agriculture-logo.svg?react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { Button } from "../../../../components/Button";
import { Link } from "react-router-dom";
interface NavbarProps {
  routes: Route[];
}

export const Navbar = ({ routes }: NavbarProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <nav className="lg:max-w-screen-xl lg:m-auto">
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
          <Link to="/app/login">
            <Button>Cadastre-se</Button>{" "}
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="p-4 absolute w-full z-50 bg-white h-hero lg:hidden">
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
