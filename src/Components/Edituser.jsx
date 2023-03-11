import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import {useParams} from "react-router-dom"
import { useNavigate} from "react-router-dom"

const Edituser=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let {data} = useParams()
    let Navigator= useNavigate()

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }

    let click=(e)=>{
        e.preventDefault()
        let load={name,salary,company}
        axios.put(`http://localhost:3000/users/${data}`,load)
        .then(()=>{
            console.log("Updated");
        })
        Navigator("/u")
    }

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${data}`)
        .then((resp)=>{
            console.log(resp);
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[])

    return(
        <div id={style.myForm}>
            <form action="">
                <tr>
                    <th colSpan="2"><h4>Update Details</h4></th>
                </tr>
                <tr>
                    <td><label htmlFor="">Name :</label></td>
                    <td><input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Salary :</label></td>
                    <td><input type="number" value={salary} onChange={salaryData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Company :</label></td>
                    <td><input type="text" value={company} onChange={companyData} /></td>
                </tr>
                <tr>
                    <td><button onClick={click}>Update</button></td>
                </tr>
            </form>
        </div>
    )
}
export default Edituser