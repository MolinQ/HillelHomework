function Post(props) {
    const {onDelete,text} = props;
    return(
        <div className='d-flex justify-content-between align-items-center post-wrapper m-3'>
            <div className='text-wrapper'>
                <span>{text}</span>
            </div>
            <div className='btn-wrapper'>
                <button onClick={onDelete} className='btn btn-danger'>Delete</button>
            </div>

        </div>
    )
}
export default Post