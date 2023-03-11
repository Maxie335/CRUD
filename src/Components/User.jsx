import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const User=()=>{
    let [content, setContent]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>{
            setContent(res.data)
        })
    },[])
    
let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/users/${id}`)
    window.location.assign("/u")
}

    return(
        <div id={style.userpage}>
            {content.map((x)=>{
                return(
                    <div id={style.card}>
                        <table>
                            <tr>
                                <td><h3>ID</h3></td>
                                <td><h3>:{x.id}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Name</h3></td>
                                <td><h3>:{x.name}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Salary</h3></td>
                                <td><h3>:{x.salary}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Company</h3></td>
                                <td><h3>:{x.company}</h3></td>
                            </tr>
                            <tr>
                                <td><Link to={`/eu/${x.id}`}>Edit</Link></td>
                                <td><button onClick={()=>{deleteData(x.id)}}>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                )
            })}
        </div>
    )
}
export default User