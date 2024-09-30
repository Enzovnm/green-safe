import { Navbar } from "./navbar/Navbar";
import { routes } from "./routes.ts";

export const Header = () => {
  return (
    <header className="shadow-2xl sticky top-0 bg-white z-50">
      <Navbar routes={routes} />
    </header>
  );
};
