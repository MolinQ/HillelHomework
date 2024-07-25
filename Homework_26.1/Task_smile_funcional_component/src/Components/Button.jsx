 function Button(props) {
        const { onClick } = props;
        return (
            <div className='d-flex justify-content-center mt-3'>
                <button className='btn btn-lg btn-success rounded-5' type='button' onClick={onClick}>Show result</button>
            </div>
        );
}
export default Button