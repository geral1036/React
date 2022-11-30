import propTypes from 'prop-types'

const Header = ({bgColor, c}) =>{

    return(
        <header style={ {backgroundColor: bgColor, color: c} }>
            <h1>Encabezado</h1>
        </header>
    )
}

//Valores por defecto de props
Header.defaultProps={
    bgColor: '#e5b23c' ,
    color: '#fff'
}

//Validaciones de props
Header.propTypes={
    bgColor: propTypes.string,
    color: propTypes.string
}

export default Header