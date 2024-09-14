import { Navbar } from "./navbar/Navbar";
import { routes } from "./routes.ts";

export const Header = () => {
  return (
    <header className="lg:max-w-screen-xl  lg:m-auto">
      <Navbar routes={routes} />
    </header>
  );
};
