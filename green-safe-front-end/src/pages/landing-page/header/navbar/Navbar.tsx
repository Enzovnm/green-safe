import { Route } from "../routes";

interface NavbarProps {
  routes: Route[];
}

export const Navbar = ({ routes }: NavbarProps) => {
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          const { title, href } = route;
          return (
            <li key={title}>
              <a href={href}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
