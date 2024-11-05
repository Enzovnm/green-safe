import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/Button";

interface projectItemProps {
  title: string;
  text: string;
  imageBanner: string;
  imageMain: string;
  onNext: () => void;
  onPrevious: () => void;
}

export const ProjectItem = ({
  title,
  text,
  imageBanner,
  imageMain,
  onNext,
  onPrevious,
}: projectItemProps) => {
  return (
    <div className="h-full lg:px-0 px-4">
      <div className="w-full lg:h-1/4 h-24  rounded-lg shadow-md">
        <img
          className="h-full w-full object-cover rounded-lg"
          src={imageBanner}
          alt="Title"
        />
      </div>
      <div className="lg:flex lg:items-center lg:h-3/4 lg:justify-between lg:py-0 py-4">
        <div className="lg:flex-1  rounded-lg shadow-md">
          <img className="rounded-lg" src={imageMain} alt="" />
        </div>
        <div className="lg:flex-1 lg:py-0 py-4 lg:px-8">
          <div className="line-clamp-8">
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-justify py-3 ">{text}</p>
          </div>
          <div className="flex justify-between py-8 items-center">
            <div>
              <Button>Leia mais </Button>
            </div>

            <div className="space-x-4 font-semibold">
              <a className="cursor-pointer" onClick={onPrevious}>
                Anterior
              </a>
              <a className="text-emerald-700 cursor-pointer" onClick={onNext}>
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
