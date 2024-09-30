export const Articles = () => {
  return (
    <section className="lg:max-w-screen-xl lg:m-auto py-8">
      <h1 className="text-3xl font-medium">Artigos Populares</h1>
      <div className="flex py-6 justify-between h-[41rem]">
        <div className="h-full">
          <img
            alt="Article 1"
            loading="lazy"
            className="h-full"
            src="./src/assets/article1.jpg"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="h-48">
            <img
              alt="Article 2"
              loading="lazy"
              className="h-full w-full"
              src="./src/assets/article2.jpg"
            />
          </div>
          <div className="h-48">
            <img
              alt="Article 3"
              className="h-full w-full"
              src="./src/assets/article3.jpg"
            />
          </div>
          <div className="h-48">
            <img
              alt="Article 3"
              className="h-full w-full"
              src="./src/assets/article4.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
