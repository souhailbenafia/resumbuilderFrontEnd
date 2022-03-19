import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="">
     <nav className=" mt-4 text-center bg- space-x-6 font-bold text-gray-500">
         <Link className="hover:text-rose-500 "  to="/">Education</Link>
         <Link className="hover:text-rose-500 "  to="/">Experiance</Link>
         <Link className="hover:text-rose-500 "  to="/">Interest</Link>
         <Link className="hover:text-rose-500 "  to="/">Language</Link>
         <Link className="hover:text-rose-500 "  to="/">Skills</Link>
         <Link className="hover:text-rose-500 "  to="/">Social Network</Link>
         <Link className="hover:text-rose-500 "  to="/">Project </Link>
         <Link className="hover:text-rose-500 "  to="/">Certification </Link>
     </nav>
    </div>
  );
}

export default NavBar;
 