import { Link, Outlet } from "react-router-dom";

const Layout = ()=>{
    return(
        <>
          <Link to="home">Home</Link> |
          <Link to="about">About</Link>  | 
          <Link to="contact">Contact</Link>  |
          <Link to="insert">Insert</Link>   |
          <Link to="update">Update</Link>  |
          <hr size="3" color="red"/>
           <Outlet/>
          <hr size="3" color="red"/>
          www.mycompany.com all right reserved.
        </>
    )
}

export default Layout;