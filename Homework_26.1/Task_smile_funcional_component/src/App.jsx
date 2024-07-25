import React, {useState} from "react";
import Header from "./Components/Header.jsx";
import Smile from "./Components/Smile.jsx";
import VoteResult from "./Components/VoteResult.jsx";
import './index.css'
function App()  {
    const [result,setResult] = useState(null);
    const imagePath = {
        deer:'../../src/assets/deer.png',
        jackOLantern:'../../src/assets/jack_o_lantern.png',
        sunglasses:'../../src/assets/sunglasses.png',
        earthAsia:'../../src/assets/earth_asia.png'
    };

   const getResult = (result) => {
       setResult(result)
    }
        return (
            <div>
                <Header />
                <Smile onResultUpdate={getResult}/>
                {result !== null
                    ? <VoteResult
                        winnerCounter={result[1]}
                        imgName={imagePath[result[0]]}
                    /> : null}
            </div>
        );
}

export default App
