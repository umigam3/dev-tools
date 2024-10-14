import Arrow from "../icons/Arrow";

export default function Hero() {
  return (
    <section className=" mb-24 mt-[12vh] px-4 mx-auto max-w-screen-xl text-center lg:px-12 flex flex-col z-20 relative">
      <h1 className="font-space_grotesk text-4xl font-medium tracking-tight md:text-4xl lg:text-4xl text-[#f1f1f1] md:px-40 leading-none">
        <span className="text-[2.15rem] tracking-tighter">
          Boost your productivity with a collection of
        </span>{" "}
        <br />
        <span className="px-1 tracking-tighter -ml-1 font-bold text-8xl text-gradient">
          Developer tools
        </span>{" "}
        <br />
        {/* <span className="">to make your life easier</span> */}
        {/* <span className="bg-gradient-to-r from-pink-600 to-purple-400 inline-block text-transparent bg-clip-text"> */}
        {/* </span>{" "} */}
      </h1>
    </section>
  );
}
