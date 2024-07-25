import { useState } from "react";

export const useChooseWinner = (onResultUpdate) => {
    const [counters, setCounters] = useState({
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
    };

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
    };

    return {
        counters,
        setCounter,
        resultSubmit
    };
};