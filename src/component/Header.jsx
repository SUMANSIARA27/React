import { Link } from "react-router";
import { LOGO_URL } from "../../utils/constant";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  const cart =  useSelector((store)=>store.cart.items)
  console.log(cart);
  
  return (
    <div className="flex justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="w-16 mx-6 mt-2" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
             
            <li>
              Status :  {onlineStatus ? "💚" : " ❤"} 
            </li>

          <li className="px-4">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
        <Link className="links font-bold">Cart ({cart.length}) </Link>
          </li>
           <li className="px-4">
            <Link className="links">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
