import { Child1 } from "./child/child1"; 
import "./main.css"
export let Parent=()=>{
    let data=[{movie:"KGF",language:"pan"},{movie:"Dr.strange",language:"english"},{movie:"Rebel",language:"telugu"}];
    let buy=(att)=>{
        console.log(att+" booked");
    }
    return(
        <div className="container">
            {
                data.map((ele)=>{
                    return <Child1 itemdata={ele} buy={buy}></Child1>
                })
            }
        </div>
    )
}