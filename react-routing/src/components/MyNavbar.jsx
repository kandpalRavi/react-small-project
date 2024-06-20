import {  NavLink } from "react-router-dom";
import styles from './MyNavbar.module.css'
const link =[
    {
        path :"/",
        title :"Home"
    },
    {
        path:"/about",
        title:"About"
    },
    {
        path:"/contact",
        title:"Contact"
    },
    {
        path :"/users",
        title:"User"
    }
]
function MyNavbar(){
    return(
        <div>
           {link.map((link)=>(
            <NavLink className={({isActive})=>
            isActive? styles.active:styles.default} key={link.path} to ={link.path}>{link.title}</NavLink>
           ))}
        </div>
    )
}

export default MyNavbar;