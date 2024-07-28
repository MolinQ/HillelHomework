import Button from "./ui/Button.jsx";
import Post from "./Post.jsx";
function Todos() {
    return(
        <div style={{margin:'5rem'}}>
                <h2 className='mt-5'>Todos</h2>
            <form action='#' className='d-flex justify-content-around align-items-center gap-1' >
                <input name='text' type="text" className='form-control w-100'/>
                <Button type='submit' className='btn-primary' text='Send'  />
            </form>
            <Post/>
        </div>

    )
}

export default Todos