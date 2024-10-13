import Hero from '@/components/Hero';
import ToolContent from '@/components/ToolContent';

export default function HomePage() {
  return (
    <main className="max-w-[80rem] mx-auto px-9 pl-[6.25rem] rela">
      {/* <div className="absolute h-[50vw] w-[100vw] rotate-45 bg-custom-gradient rounded-full z-0 top-[70vh] left-[-40vw] opacity-15 blur-[4px]"></div> */}
      {/* <div className="absolute h-[60vw] w-[60vw] bg-custom-gradient rotate-90 rounded-full z-0 top-[35vh] left-[60vw] opacity-15 blur-[4px]"></div> */}
      <Hero />
      <section className="flex flex-wrap gap-3 min-h-full mx-auto z-10 relative">
        <ToolContent />
      </section>
    </main>
  );
}
