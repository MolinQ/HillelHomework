import { createContext } from "react";
export const themes = {
    darkThem: {
        bgHeader: 'gray',
        bgBody:'#5e5b5b',
        textColor:'white',
        btnColorClass: 'btn btn-dark',
        borderColor: 'white'
    },
    lightThem: {
        bgHeader: '#4170f4',
        bgBody:'white',
        textColor:'black',
        btnColorClass: 'btn btn-primary',
        borderColor: 'black'
    }
}

export const ThemeContext = createContext();
