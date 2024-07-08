import GitHub from "@/icons/GitHub";

export default function Header() {
  return (
    <header className="flex items-center h-14 w-full">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto px-9">
        <div>
          AllTools.dev
        </div>
        <nav>
          <GitHub className="h-6 w-6"/>
        </nav>
      </div>
    </header>
  );
}
