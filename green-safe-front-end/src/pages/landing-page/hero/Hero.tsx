import Typewriter from "typewriter-effect";
import { Button } from "../../../components/Button";
import { CircleChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-black bg-opacity-75 bg-cover bg-center bg-blend-darken -z-50 flex h-hero flex-col justify-center bg-fixed">
      <div className="lg:max-w-screen-xl lg:px-0 px-2 lg:m-auto">
        <h1 className="text-center text-2xl lg:text-3xl uppercase font-extrabold text-white">
          Inove seu agronegócio com tecnologia de ponta para aumentar <br />
          <span className="text-emerald-500">
            <Typewriter
              options={{
                strings: ["competitividade", "eficiência", "lucro", ""],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h1>
        <div className="py-5">
          <Button>
            Cadastre-se gratuitamente <CircleChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
