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
         <Link className="hover:text-rose-500 "  to="/">Education</Link>
         <Link className="hover:text-rose-500 "  to="/">Experiance</Link>
         <Link className="hover:text-rose-500 "  to="/">Interest</Link>
         <Link className="hover:text-rose-500 "  to="/">Language</Link>
         <Link className="hover:text-rose-500 "  to="/">Skills</Link>
         <Link className="hover:text-rose-500 "  to="/">Social Network</Link>
         <Link className="hover:text-rose-500 "  to="/">Project </Link>
         <Link className="hover:text-rose-500 "  to="/">Certification </Link>
         <Link className="hover:text-rose-500 "  to="/login" onClick={LogoutHanlder}>
                Logout
              </Link>
     </nav>
    </div>
  );
}

export default NavBar;
 