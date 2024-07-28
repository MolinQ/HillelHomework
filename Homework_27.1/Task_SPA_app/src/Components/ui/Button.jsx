function Button(props) {
    const {text , type = 'button' , className = 'btn-primary', } = props;
    return(
        <div>
            <button type={type} className={`btn ${className}`} >{text}</button>
        </div>
    )
}

export default Button