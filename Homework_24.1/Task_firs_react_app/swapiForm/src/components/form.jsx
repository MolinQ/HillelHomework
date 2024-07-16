function Form() {
    return(
        <div  className='container input-group mb-3'>
                <label className='label p-2' htmlFor="input">https://swapi.dev/api/</label>
            <input className='form-control' type="text"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Get info</button>
            </div>
        </div>
    )
}

export default Form