import {useContext} from "react";
import {ThemeContext,themes} from "../../../shared/model/ThemContext.js";
function ChangeColor() {
    const [them,setThem] = useContext(ThemeContext);
    const onClick = () => {
        if (them.bgHeader === 'gray') {
        setThem(themes.lightThem)
        } else {
            setThem(themes.darkThem)
        }
    }
    return(
        <button onClick={onClick} className={them.btnColorClass} style={{margin:'1rem'}}>
            Change Them
        </button>
    )
}
export default ChangeColor