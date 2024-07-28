import GitHub from "@/icons/GitHub";

export default function Header() {
  return (
    <header className="flex items-center h-14 w-full">
      <div className="flex items-center justify-between max-w-6xl w-full mx-auto px-9">
        <div className="font-bold text-2xl select-none">
          AllTools<span className="ml-1 text-sm bg-gradient-to-r from-pink-600 to-purple-400 rounded py-[1px] px-[3px]">.dev</span>
        </div>
        <nav>
          <a href="https://github.com/umigam3/dev-tools" target="_blank">
            <GitHub className="h-6 w-6 hover:scale-125   duration-150"/>
          </a>
        </nav>
      </div>
    </header>
  );
}
