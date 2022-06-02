import { useState } from "react"
export let Card=()=>{
    let [fullname,setFullname]=useState("");
    let [lastname,setLastname]=useState("");
    let [age,setAge]=useState("");
    let remove=()=>{
        setFullname("");
        setLastname("");
        setAge("");
    }
    return(
        <div id="container">
            <div className="content">
                <input type="text" placeholder="enter firstname" className="fname" onChange={(e)=>{setFullname(e.target.value)}} value={fullname}></input>
                <input type="text" placeholder="enter lastname" className="lname" onChange={(e)=>{setLastname(e.target.value)}} value={lastname}></input>
                <input type="text" placeholder="enter age" className="Age" onChange={(e)=>{setAge(e.target.value)}} value={age}></input>
            </div>
            <div>
                <div>{fullname} {lastname}</div>
                <div>{age}</div>
                <button onClick={remove}>Clear Form</button>
            </div>
        </div>
    )
}