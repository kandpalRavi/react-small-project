import { Route, Routes } from "react-router-dom";
import Users from "../components/Users";
import SingleUser from "../components/SingleUser";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element ={<h1>Home</h1>}/>
                <Route path="/about" element ={<h1>about</h1>}/>
                <Route path="/contact" element = {<h1>contact</h1>}/>
                <Route path ="/users" element ={<Users/>}/>
                <Route path ="/users/:id" element={<SingleUser/>}/>
            </Routes>
        </div>
    )

}
export default AllRoutes;
