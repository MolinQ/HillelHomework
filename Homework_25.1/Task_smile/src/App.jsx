import React, {Component} from "react";
import './index.css'
import Header from "./Components/Header.jsx";
import Smile from "./Components/Smile.jsx";
import VoteResult from "./Components/VoteResult.jsx";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result:null
        }
        this.getResult = this.getResult.bind(this)
    }
    imagePath = {
        deer:'../../src/assets/deer.png',
        jackOLantern:'../../src/assets/jack_o_lantern.png',
        sunglasses:'../../src/assets/sunglasses.png',
        earthAsia:'../../src/assets/earth_asia.png'
    };
    getResult(result) {
        this.setState({result})
    }
    render() {
        return (
            <div>
                <Header />
                <Smile onResultUpdate={this.getResult}/>
                {this.state.result !== null
                    ? <VoteResult
                    winnerCounter={this.state.result[1]}
                    imgName={this.imagePath[this.state.result[0]]}
                /> : null}
            </div>
        );
    }
}

export default App
