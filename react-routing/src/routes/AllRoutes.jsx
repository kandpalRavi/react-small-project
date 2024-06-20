import { Route, Routes } from "react-router-dom";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element ={<h1>Home</h1>}/>
                <Route path="/about" element ={<h1>about</h1>}/>
                <Route path="/contact" element = {<h1>contact</h1>}/>
            </Routes>
        </div>
    )

}
export default AllRoutes;
