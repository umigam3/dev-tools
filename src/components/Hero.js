import Arrow from "@/icons/Arrow";

export default function Hero() {
  return (
    <section className="h-[80vh] mt-[5vh] px-4 mx-auto max-w-screen-xl text-center lg:px-12 flex flex-col">
      <h1 className="mb-28 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-white md:px-10">
        <span className="tracking-tighter font-black text-8xl bg-gradient-to-r from-pink-600 to-purple-400 inline-block text-transparent bg-clip-text">
          Developer tools
        </span>{" "}
        <br />
        to make your life <span className="">easier</span>
        {/* <span className="bg-gradient-to-r from-pink-600 to-purple-400 inline-block text-transparent bg-clip-text"> */}
        {/* </span>{" "} */}
      </h1>
      <p className="mb-10 text-base font-normal text-gray-300 lg:text-base sm:px-16 xl:px-60">
        A collection of coding tools designed to simplify developers lives and
        boost productivity.
      </p>
      <div className="flex flex-row gap-x-10 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="#about"
          className="bg-gradient-to-r from-pink-600 to-purple-400 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 max-w-36"
        >
          Learn more
        </a>
        <a
          href="https://github.com/umigam3/dev-tools?tab=readme-ov-file#-getting-started"
          className="group inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-primary-300 border-1.5 w-36 max-w-36"
        >
          Add tool
          <Arrow className="w-4 h-4 opacity-0 transform group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition duration-150 ml-2" />{" "}
        </a>
      </div>
    </section>
  );
}
