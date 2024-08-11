import {useDispatch} from "react-redux";
import {clearSwapiDate} from "../core/slices/swapiSlices.js";
function Footer(){
    const dispatch = useDispatch();
    const handleClear = () => {
        dispatch(clearSwapiDate());
    };
    return (
        <footer className='mt-3'>
           <button onClick={handleClear} className='btn btn-danger'>Clear</button>
        </footer>
    );
}

export default Footer;