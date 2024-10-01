import Arrow from "@/icons/Arrow";

export default function Hero() {
  return (
    <section className="h-[30vh] mt-[5vh] px-4 mx-auto max-w-screen-xl text-left lg:px-12 flex flex-col">
      <h1 className="mb-28 text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-white md:px-40 leading-none">
        <span className="text-4xl">A collection of</span> <br />
        <span className="tracking-tighter -ml-3 font-black text-8xl bg-gradient-to-r from-pink-600 to-purple-400 inline-block text-transparent bg-clip-text">
          developer tools
        </span>{" "}
        <br />
        to make your life <span className="">easier</span>
        {/* <span className="bg-gradient-to-r from-pink-600 to-purple-400 inline-block text-transparent bg-clip-text"> */}
        {/* </span>{" "} */}
      </h1>
    </section>
  );
}
