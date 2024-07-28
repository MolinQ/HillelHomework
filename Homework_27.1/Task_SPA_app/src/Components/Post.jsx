import Button from "./ui/Button.jsx";
function Post() {
    return(
        <div className='d-flex justify-content-between align-items-center post-wrapper m-3'
            style={{border: '1px solid black',borderRadius: '3px',padding: '0 10px 0 10px'}}
        >
            <div className='text-wrapper'>
                <span>Post</span>
            </div>
            <div className='btn-wrapper d-flex align-items-center'>
                <Button className='btn-success m-2' text='Done' />
                <Button className='btn-danger' text='Delete' />
            </div>

        </div>
    )
}

export default Post