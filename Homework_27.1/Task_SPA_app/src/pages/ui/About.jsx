import {useContext} from "react";
import {ThemeContext} from "../../shared/model/ThemContext.js";
function About() {
    const [them] = useContext(ThemeContext);
    return(
        <div style={{textAlign:'center', padding :'1rem', color:them.textColor}}>
            <h3>About</h3>
            <span>
                I am a frontend developer with experience in JavaScript, TypeScripte, and Angular for more than 1 year.
                I have experience in creating both simple user interfaces and multifunctional applications.
                I love working in a team and as an employee, I approach my work responsibly.
                I never stop learning and try to improve my knowledge.
                I take any task responsibly and do my best to achieve the best result.
            </span>
        </div>
    )
}

export default About