import { useState } from "react";
import { ProjectItem } from "./ProjectItem";

import security1 from "/src/assets/security1.jpeg";
import security2 from "/src/assets/security2.jpeg";
import smartTech from "/src/assets/smart-tech.png";
import smartTechMain from "/src/assets/smart-tech(main).jpeg";

interface Project {
  title: string;
  text: string;
  imageBanner: string;
  imageMain: string;
}

export const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      title:
        "Parceria entre GreenSafe e Ministério do Meio Ambiente: Protegendo Informações sobre Toxinas Perigosas",
      text: "A GreenSafe foi contratada pelo Ministério do Meio Ambiente para desenvolver uma aplicação que assegura a proteção das informações sobre toxinas perigosas. Nossa solução garante que dados críticos sejam armazenados de forma segura e acessível apenas por profissionais autorizados, com múltiplos níveis de segurança, incluindo autenticação facial. Além disso, todos os dados são criptografados, promovendo a integridade das informações.",
      imageBanner: security1,
      imageMain: security2,
    },
    {
      title: "Transformação de Lavouras com IoT",
      text: 'O projeto "Transformação de Lavouras com IoT" foi desenvolvido pela GreenSafe em uma propriedade agrícola de 1.500 hectares, com objetivo de otimizar a produção e promover práticas agrícolas sustentáveis. Para isso, a iniciativa visou maximizar a produtividade, economizar recursos e promover a saúde do solo. A implementação do projeto incluiu a instalação de sensores de umidade do solo em pontos estratégicos da lavoura, permitindo o monitoramento das condições de irrigação.',
      imageBanner: smartTech,
      imageMain: smartTechMain,
    },
  ]);

  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projetos" className="bg-custom-gray">
      <div className="lg:max-w-screen-xl lg:m-auto py-8 lg:h-hero">
        <div>
          <h1 className="text-3xl lg:text-left text-center font-medium">
            Projetos
          </h1>
        </div>
        <div className="py-6 h-full w-full">
          <ProjectItem
            text={currentProject.text}
            title={currentProject.title}
            imageBanner={currentProject.imageBanner}
            imageMain={currentProject.imageMain}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>
      </div>
    </section>
  );
};
