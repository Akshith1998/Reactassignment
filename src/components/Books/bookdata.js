import "./bookscss.css"
export let Bookcontent=(props)=>{
    return(
        <div className="book"> 
            <h2>{props.bookdata.title}</h2>
            <p>{props.bookdata.author}</p>
        </div>
    )
}