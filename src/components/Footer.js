export default function Footer() {
  return (
    <footer className="flex items-center h-14 w-full text-sm ">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto px-9">
        <span>© 2024 Gerard Doncel Gutiérrez</span>
        <nav className="flex justify-center items-center gap-x-4">
            <a className="hover:sm:text-white" href="#">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
