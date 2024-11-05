import { Articles } from "./articles/Articles";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { Projects } from "./projects/Projects";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
      <Projects />
    </>
  );
};
