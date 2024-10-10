import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/Button";

interface projectItemProps {
  title: string;
  text: string;
  imageBanner: string;
  imageMain: string;
}

export const ProjectItem = () => {
  return (
    <div className="h-full">
      <div className="w-full h-1/4 rounded-lg shadow-md">
        <img
          className="h-full w-full object-cover rounded-lg"
          src="./src/assets/smart-tech.png"
          alt="Title"
        />
      </div>
      <div className="flex items-center h-3/4 justify-between">
        <div className="flex-1 rounded-lg shadow-md">
          <img
            className="rounded-lg"
            src="./src/assets/smart-tech(main).jpeg"
            alt=""
          />
        </div>
        <div className="flex-1  px-8">
          <div className="line-clamp-8">
            <h2 className="text-xl font-medium">
              Transformação de Lavouras com IoT
            </h2>
            <p className="text-justify py-3 ">
              O projeto "Transformação de Lavouras com IoT" foi desenvolvido
              pela GreenSafe em uma propriedade agrícola de 1.500 hectares, com
              o objetivo de otimizar a produção e promover práticas agrícolas
              sustentáveis. Para isso, a iniciativa visou maximizar a
              produtividade, economizar recursos e promover a saúde do solo. A
              implementação do projeto incluiu a instalação de sensores de
              umidade do solo em pontos estratégicos da lavoura, permitindo o
              monitoramento das condições de irrigação.
            </p>
          </div>
          <div className="flex justify-between py-8 items-center">
            <div>
              <Button>Leia mais </Button>
            </div>

            <div className="space-x-4 font-semibold">
              <a href="#">Anterior</a>
              <a className="text-emerald-700" href="#">
                Próximo
                <ArrowRight className="inline" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
