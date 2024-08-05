import React from 'react';
import { Provider } from 'react-redux';
import { store } from './core/store.js';
import Counter from "./Components/Counter.jsx";
function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
export default App;