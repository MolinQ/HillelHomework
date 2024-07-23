import React, {Component} from "react";
import Button from "./Button.jsx";
class Smile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: {
                deer: 0,
                jackOLantern: 0,
                sunglasses: 0,
                earthAsia: 0
            }
        }
        this.setCounter = this.setCounter.bind(this);
        this.resultSubmit = this.resultSubmit.bind(this);
    }
    setCounter(imgCounter) {
        this.setState(prevState => ({
            counters: {
                ...prevState.counters,
                [imgCounter] : prevState.counters[imgCounter] + 1
            }
        }));
    }
    resultSubmit() {
        const {counters} = this.state;
        const countersArray = Object.entries(counters);
        const maxValue = Math.max(...countersArray.map(el => el[1]));
        const result = countersArray.filter(el => el[1] === maxValue);
        if (maxValue <= 0) {
            alert('Проголосуйте хоча б за 1 смайлик');
        } else if (result.length > 1) {
            alert('Переможця не виявлено, змініть вибір та спробуйте ще раз');
            this.props.onResultUpdate(null);
        } else {
            this.props.onResultUpdate(result[0]);
        }
    }
    render() {
        return (
            <div>
            <div className='d-flex justify-content-around mt-5 align-items-end'>
                <img onClick={() => this.setCounter('deer')} src='../../src/assets/deer.png' alt="none"/>
                <span>{this.state.counters.deer}</span>

                <img onClick={() => this.setCounter('jackOLantern')} src='../../src/assets/jack_o_lantern.png' alt="none"/>
                <span>{this.state.counters.jackOLantern}</span>

                <img onClick={() => this.setCounter('sunglasses')} src='../../src/assets/sunglasses.png' alt="none"/>
                <span>{this.state.counters.sunglasses}</span>

                <img onClick={() => this.setCounter('earthAsia')} src='../../src/assets/earth_asia.png' alt="none"/>
                <span>{this.state.counters.earthAsia}</span>
            </div>
                <Button onClick={this.resultSubmit} />
            </div>
        );
    }
}
export default Smile