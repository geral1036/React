import Header from "../feedback/Header";
import feedbackItem from "../feedback/FeedbackItem";

function App(){
    const HeaderStyles={
        backgorundColor: '#ed51a3',
        color: 'red'
    }
    return (
        <div className="container">
            {/* props para ingresar a componente*/ }
            <Header color={HeaderStyles.backgorundColor.bgColor}  />
        </div>
    )
}

export default App;