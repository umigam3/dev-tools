export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
        <div className="py-8 mx-auto max-w-screen-xl lg:py-16">
            <h1 className="mb-6 font-extrabold tracking-tight leading-none text-gray-900 text-3xl dark:text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">Why</span> I build this project?</h1>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">
              While working on my personal projects to learn different technologies, I often found myself referring to a small bookmark folder where 
              I keep all the tools I typically use for <span className="font-bold text-white">more comfortable development</span>. 
            </p>
            <p className="mb-8 text-base font-normal text-gray-500 dark:text-gray-400">
              One day, an idea pop up: 
              &quot;Why not create a <span className="font-bold text-white">directory of developer tools</span> and encourage everyone to collaborate and share their favorite tools?&quot;
              This is why alltoolsdev was born, a place to discover new tools that enhance your workflow and to share your favorites, 
              contributing to this wonderful community.
            </p>
        </div>
    </section>
  );
}
  