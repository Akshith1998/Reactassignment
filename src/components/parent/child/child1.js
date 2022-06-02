import "./style.css"
export let Child1=(props)=>{
    let mybuy=()=>{
        return props.buy(props.itemdata.movie)
    }
    return(
        <div className="card">
            <h1>{props.itemdata.movie}</h1>
            <p>{props.itemdata.language}</p>
            <button onClick={mybuy}>Buy Now</button>
        </div>
    )
}