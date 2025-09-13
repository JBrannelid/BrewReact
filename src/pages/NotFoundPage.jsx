const NotFoundPage = () => {
  return (
    <div
      className=" min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/notFound.jpg')" }}
    >
      <div className="flex flex-col items-center sm:items-end justify-start sm:justify-center min-h-screen p-8 md:p-10 lg:p-20">
        <p className="md:text-xl lg:text-2xl text-white opacity-80 max-w-sm text-center mb-2">
          Houston <br /> we have a problem
        </p>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-xl lg:text-4xl font-semibold text-white mb-10 text-center sm:text-right">
          Page Not Found
        </h2>
        <a
          href="/"
          className="glass-btn-dark text-primary-text-light font-semibold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
