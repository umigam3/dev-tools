import Login from "@/icons/LogIn";

export default function Header() {
  return (
    <header className="flex items-center h-14 w-full">
      <div className="flex items-center justify-end max-w-6xl w-full mx-auto px-9">
        <nav>
          <a href="/login">
            <Login className="h-6 w-6 hover:scale-125 duration-150"/>
          </a>
        </nav>
      </div>
    </header>
  );
}
