import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
  return (
    <section className="bg-custom-gray">
      <div className="lg:max-w-screen-xl lg:m-auto py-8 lg:h-hero">
        <div>
          <h1 className="text-3xl font-medium">Projetos</h1>
        </div>
        <div className="py-6 h-full w-full">
          <ProjectItem />
        </div>
      </div>
    </section>
  );
};
