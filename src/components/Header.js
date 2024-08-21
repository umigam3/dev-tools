import Login from "@/icons/LogIn";

export default function Header() {
  return (
    <header className="flex items-center h-20 w-full">
      <div className="flex items-center justify-center max-w-6xl w-full mx-auto px-9">
        <img src="/logo.svg" width="75" className="" />
        {/* <nav>
          <a href="/login">
            <Login className="h-6 w-6 hover:scale-125 duration-150" />
          </a>
        </nav> */}
      </div>
    </header>
  );
}
