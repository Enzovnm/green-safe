import article1 from '/src/assets/article1.jpg';
import article2 from '/src/assets/article2.jpg';
import article3 from '/src/assets/article3.jpg';
import article4 from '/src/assets/article4.jpg';

export const Articles = () => {
  return (
    <section
      id="artigos"
      className="lg:max-w-screen-xl lg:m-auto py-8 lg:h-hero"
    >
      <div className="h-full flex flex-col justify-center">
        <h1 className="text-3xl lg:text-left text-center font-medium">
          Artigos Populares
        </h1>
        <div className="flex py-6 lg:flex-row lg:justify-between lg:h-[41rem] flex-col lg:space-y-0 space-y-6">
          <div className="cursor-pointer h-full relative transition-transform duration-700 ease-in-out transform hover:scale-95">
            <img
              alt="Article 1"
              loading="lazy"
              className="h-full"
              src={article1}
            />
            <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 lg:h-1/6 h-1/2 w-full p-4">
              <h2 className="font-bold text-lg">
                Biotecnologia na Agricultura: Inovação para um Futuro Sustentável
              </h2>
              <p className="text-sm truncate lg:whitespace-normal">
                A biotecnologia na agricultura revoluciona práticas agrícolas,
                melhorando a produtividade e sustentabilidade. Com técnicas como
                a engenharia genética e biofertilizantes, enfrenta desafios como
                mudanças climáticas.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="lg:h-48 h-full relative transition-transform duration-700 ease-in-out transform hover:scale-95 cursor-pointer">
              <img
                alt="Article 2"
                loading="lazy"
                className="h-full w-full"
                src={article2}
              />
              <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 h-1/3 w-full p-2">
                <h2 className="font-bold text-lg">A Evolução da Agricultura</h2>
                <p className="text-sm truncate">
                  Explore como a agricultura evoluiu ao longo dos anos,
                  incorporando novas tecnologias e práticas para atender às
                  demandas atuais.
                </p>
              </div>
            </div>
            <div className="lg:h-48 relative transition-transform duration-700 ease-in-out transform hover:scale-95 cursor-pointer">
              <img
                alt="Article 3"
                className="h-full w-full"
                src={article3}
              />
              <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 h-1/3 w-full p-2">
                <h2 className="font-bold text-lg">Plantação Inteligente</h2>
                <p className="text-sm truncate">
                  Descubra técnicas de plantação que otimizam o plantio,
                  aumentam a produtividade e promovem a sustentabilidade no
                  campo.
                </p>
              </div>
            </div>
            <div className="lg:h-48 relative transition-transform duration-700 ease-in-out transform hover:scale-95 cursor-pointer">
              <img
                alt="Article 4"
                className="h-full w-full"
                src={article4}
              />
              <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 h-1/3 w-full p-2">
                <h2 className="font-bold text-lg">
                  Softwares de Gestão Agrícolas
                </h2>
                <p className="text-sm truncate">
                  Conheça os melhores softwares de gestão agrícola que otimizam
                  processos, aumentam a produtividade e facilitam a tomada de
                  decisões.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
