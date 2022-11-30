import Header from "./feedback/Header"
import FeedbackItem from "./feedback/FeedbackItem"

function App(){

    const headerStyles = {
        backgroundColor: '#ed51a3',
        color: 'red'
    }

    return(
        <div className="container">
            {/* Props para ingresar informacion al componente */}
            <Header 
                bgColor={headerStyles.backgroundColor} 
                c = "red"
            />

            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            
        </div>
    )
}

export default App