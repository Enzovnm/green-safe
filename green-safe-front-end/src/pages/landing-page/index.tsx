import { Articles } from "./articles/Articles";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
    </>
  );
};
