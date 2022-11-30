import { useState } from "react"

const FeedbackItem = () => {

    //Estados del componente 
    const [ rating, setRating ] = useState(1)
    const [ texto, SetTexto] = useState(" Buen instructor, mejorar recursos")
    
    const cambiarNota = () =>{
        setRating((prev) => {
            return prev + 1
        })
    }
    return(
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-rating">
                { texto }
            </div>
            <button onClick={ cambiarNota }> Cambiar nota </button>
        </div>
    )
}

export default FeedbackItem