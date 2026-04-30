import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";

import ErrorPage from "./src/component/ErrorPage";
import { createBrowserRouter, Outlet , RouterProvider, useParams } from "react-router";
import About from "./src/component/About";
import Home from "./src/component/Home";
import Contact from "./src/component/Contact";
import RestaurantMenu from "./src/component/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
const AppLayout = () => {
 
  const [userName,setUserName] = useState()

  useEffect(()=>{
   const data = {
    name:'suman kumar sahu'
   }
   setUserName(data.name)
  },[])
  
  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
       <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([{
  element:<AppLayout/> , 
  path:"/",
  children:[
    {
      element:<Home/>,
      path:"/",   
    },
      {
      element:<About/>,
      path:"about",   
    },
     {
      element:<Contact/>,
      path:"contact",   
    },
     {
      element:<RestaurantMenu/>,
      path:"/restaurant/:resId",   
    },
  ],
  errorElement:<ErrorPage/>
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
