import {Link} from "react-router-dom"

import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
  return (
    <nav className="container flex gap-2 items-center justify-between font-medium py-2">
      <h1 className="text-xl">
        <Link to={"/"}>
          Todo App
        </Link>
      </h1>
      <ThemeToggle />
    </nav>
  )
}

export default NavBar