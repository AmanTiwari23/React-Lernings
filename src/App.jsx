import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout";

const App = ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="about" element={<About/>}/>

            </Route>
        </Routes>

        </BrowserRouter>
        </>
    )
}

export default App;