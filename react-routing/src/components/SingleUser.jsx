import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUsers(id){
    return fetch("https://reqres.in/api/users/"+id).then((res) => res.json());
      
}

function SingleUser(){
    const [data,setData]= useState({});
    const param = useParams();
    useEffect(()=>{
        getUsers(param.id).then((res)=>{
            setData(res.data);
         });
    },[param.id])
    return(
        <div>
            <h1>User ID:{param.id}</h1>
            {data &&(
                <>
                    <img src={data.avatar} width="100px"alt="Broken" />
                    <h3>Name:{`${data.first_name} ${data.last_name}`}</h3>
                    <h3>Email:{data.email}</h3>
                </>
            )}
            
            <Link to={`/users`}>Back</Link>
        </div>
        
    )
}

export default SingleUser;