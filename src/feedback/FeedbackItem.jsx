//hooks para el estado inicial
import{useState} from "react";

const feedbackItem =()=>{

    //Estados del componente un etsado y un modificador del estado
    const[rating, setRating ]=useState(1)
    const[texto, setTexto]=useState("Buen instructor")
    const cambiarNota = ()=>{
        //prev guarda el estado actual
        setRating((prev)=>{
            return prev+1
        })
    }
return(
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-rating">{texto}</div>
        <button onClick={()=>{ console.log(rating)}}>Cambiar nota</button>
    </div>
)
}

export default feedbackItem