import Button from "./Button.jsx";
import {useState} from "react";
function Smile(props)  {
    const {onResultUpdate} = props
    const [counters, setCounters] = useState(
        {
        deer: 0,
        jackOLantern: 0,
        sunglasses: 0,
        earthAsia: 0
    });
   const setCounter = (imgCounter) => {
       setCounters(prevState => ({
            ...prevState,
           [imgCounter]: prevState[imgCounter] + 1
       }));
    }
   const resultSubmit = () => {
        const countersArray = Object.entries(counters);
        const maxValue = Math.max(...countersArray.map(el => el[1]));
        const result = countersArray.filter(el => el[1] === maxValue);
        if (maxValue <= 0) {
            alert('Проголосуйте хоча б за 1 смайлик');
        } else if (result.length > 1) {
            alert('Переможця не виявлено, змініть вибір та спробуйте ще раз');
            onResultUpdate(null);
        } else {
            onResultUpdate(result[0]);
        }
    }
        return (
            <div>
            <div className='d-flex justify-content-around mt-5 align-items-end'>
                <img onClick={() => setCounter('deer')} src='../../src/assets/deer.png' alt="none"/>
                <span>{counters.deer}</span>

                <img onClick={() => setCounter('jackOLantern')} src='../../src/assets/jack_o_lantern.png' alt="none"/>
                <span>{counters.jackOLantern}</span>

                <img onClick={() => setCounter('sunglasses')} src='../../src/assets/sunglasses.png' alt="none"/>
                <span>{counters.sunglasses}</span>

                <img onClick={() => setCounter('earthAsia')} src='../../src/assets/earth_asia.png' alt="none"/>
                <span>{counters.earthAsia}</span>
            </div>
                <Button onClick={resultSubmit} />
            </div>
        );
}
export default Smile