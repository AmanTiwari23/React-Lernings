import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./Layout";
import Update from "./pages/Update";
import Insert from "./pages/Insert";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Display from "./pages/Display";
import MyEdit from "./pages/MyEdit";
import Search from "./pages/Search";


const App = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="home" element={<Home/>}/>
             <Route path="contact" element={<Contact/>}/>
             <Route path="update" element={<Update/>}/>
             <Route path="insert" element={<Insert/>}/>
             <Route path="display" element={<Display/>}/>
             <Route path="myedit/:id" element={<MyEdit/>}/>
             <Route path="search" element={<Search/>}/>

            </Route>
        </Routes>

        </BrowserRouter>
        </>
    )
}

export default App;