import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout} from "../../redux/actions/authAction";

function NavBar() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const LogoutHanlder= () => {

    dispatch(Logout());
    
  };
  return (
    <div className="">
     <nav className=" mt-4 text-center bg- space-x-6 font-bold text-gray-500">
         <Link className="hover:text-rose-500 "  to="/info">Information </Link>
         <Link className="hover:text-rose-500 "  to="/socialnetwork">Social Network</Link>
         <Link className="hover:text-rose-500 "  to="/education">Education</Link>
         <Link className="hover:text-rose-500 "  to="/experiance">Experience</Link>
         <Link className="hover:text-rose-500 "  to="/skills">Skills</Link>
         <Link className="hover:text-rose-500 "  to="/certification">Certification </Link>
         <Link className="hover:text-rose-500 "  to="/project">Projet </Link>
         <Link className="hover:text-rose-500 "  to="/language">Language</Link>
         <Link className="hover:text-rose-500 "  to="/interest">Interest</Link>
         <Link className="hover:text-rose-500 "  to="/login" onClick={LogoutHanlder}>
                Logout
              </Link>
     </nav>
    </div>
  );
}

export default NavBar;
 