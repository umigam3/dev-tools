import Hero from '@/components/Hero';
import About from '@/components/About';
import ToolContent from '@/components/ToolContent';

export default function HomePage() {
  return (
    <main className='max-w-6xl mx-auto px-9'>
      <Hero />
      <section className='flex flex-wrap gap-3 min-h-full mx-auto'>
        <ToolContent />
      </section>
      <About />
    </main>
  );
}
