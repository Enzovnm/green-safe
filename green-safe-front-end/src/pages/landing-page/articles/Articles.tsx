export const Articles = () => {
  return (
    <section className="lg:max-w-screen-xl lg:m-auto py-8">
      <h1 className="text-3xl font-medium">Artigos Populares</h1>
      <div className="flex py-6 justify-between h-[41rem]">
        <div className="h-full relative">
          <img
            alt="Article 1"
            loading="lazy"
            className="h-full"
            src="./src/assets/article1.jpg"
          />
          <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 h-1/6 w-full p-4">
            <h2 className="font-bold text-lg">
              Biotecnologia na Agricultura: Inovação para um Futuro Sustentável
            </h2>
            <p className="text-sm">
              A biotecnologia na agricultura revoluciona práticas agrícolas,
              melhorando a produtividade e sustentabilidade. Com técnicas como a
              engenharia genética e biofertilizantes, enfrenta desafios como
              mudanças climáticas.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-48 relative">
            <img
              alt="Article 2"
              loading="lazy"
              className="h-full w-full"
              src="./src/assets/article2.jpg"
            />
            <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 h-1/3 w-full p-2">
              <h2 className="font-bold text-lg">A Evolução da Agricultura</h2>
              <p className="text-sm truncate">
                Explore como a agricultura evoluiu ao longo dos anos,
                incorporando novas tecnologias e práticas para atender às
                demandas atuais..
              </p>
            </div>
          </div>
          <div className="h-48 relative">
            <img
              alt="Article 3"
              className="h-full w-full"
              src="./src/assets/article3.jpg"
            />
            <div className="bg-black bg-opacity-80 text-white absolute bottom-0 left-0 h-1/3 w-full p-2">
              <h2 className="font-bold text-lg">Plantação Inteligente</h2>
              <p className="text-sm truncate">
                Descubra técnicas de plantação que otimizam o plantio, aumentam
                a produtividade e promovem a sustentabilidade no campo.
              </p>
            </div>
          </div>
          <div className="h-48 relative">
            <img
              alt="Article 4"
              className="h-full w-full"
              src="./src/assets/article4.jpg"
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
    </section>
  );
};
