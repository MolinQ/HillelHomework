import React from 'react';
import store from "./core/store.js";
import {Provider} from "react-redux";
import SwapiList from "./components/SwapiList.jsx";
import Footer from "./components/Footer.jsx";
import Input from "./components/Input.jsx";
function App() {
    return (
    <Provider store={store} >
        <div className='container-md ' >
            <h1>Swapi</h1>
            <Input />
            <SwapiList />
            <Footer />
        </div>
    </Provider >
    );
}

export default App;