import React from "react";
import Button from "./Button.jsx";
import { useChooseWinner } from "../helpers/useChooseWinner.js";

function Smile(props) {
    const { onResultUpdate } = props;
    const { counters, setCounter, resultSubmit } = useChooseWinner(onResultUpdate);

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

export default Smile;