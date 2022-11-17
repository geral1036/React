import propTypes from 'prop-types'

const Header = ({bgColor,color}) =>{
  
    //solo retonar un componente 
    return(
        <header style={{
            backgroundColor:bgColor,
            color:color
        }}>
            <h1>Encabezado</h1>
        </header>
    )
}

Header.defaultPropos={
    bgColor: '#e5b23c',
    color: '#fff'
}

//validaciones de props
Header.propTypes={
    bgColor:propTypes.string,
    color: propTypes.string
}

export default Header