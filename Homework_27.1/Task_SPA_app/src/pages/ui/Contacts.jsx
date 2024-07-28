import {useContext} from "react";
import {ThemeContext} from "../../shared/model/ThemContext.js";
function Contacts() {
    const [them] = useContext(ThemeContext);
    return(
        <div style={{padding :'1rem',color:them.textColor}}>
            <p>My contacts</p>
            <ul>
                <li>Name:Kiril</li>
                <li>Location: Dnipro</li>
                <li>Phone: +380669875532</li>
                <li>Email: Test@gmail.com</li>
            </ul>
        </div>
    )
}
export default Contacts