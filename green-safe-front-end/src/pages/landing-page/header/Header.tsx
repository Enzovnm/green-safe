import { Navbar } from "./navbar/Navbar";
import { routes } from "./routes.ts";

export const Header = () => {
  return (
    <header className="bg">
      <Navbar routes={routes} />
    </header>
  );
};
