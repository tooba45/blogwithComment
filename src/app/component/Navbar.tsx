import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  return (
    <nav className=" flex items-center gap-20 justify-center mx-auto  py-5 ">
     <Link href="/" className="text-3xl pb-2 font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text" >
          ToobaBlog
     </Link>
    <ModeToggle/>

    </nav>
  )
}

export default Navbar
