import Header from "./Components/Header.jsx";
import Todos from "./Components/Todos.jsx";
import './shared/model/index.css'
import {ThemeContext, themes} from "./shared/model/ThemContext.js";
import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contacts from "./pages/ui/Contacts.jsx";
import About from "./pages/ui/About.jsx";
import {routes} from "./shared/config/routes.js";
function App() {
    const them = useState(themes.lightThem);
    return(
        <ThemeContext.Provider value={them}>
        <BrowserRouter>
            <div style={{backgroundColor:them[0].bgBody,height:'100vh'}}>
            <Header />
                <main>
                <Routes>
                    <Route path={routes.main} element={<Todos />}></Route>
                    <Route path={routes.contacts} element={<Contacts />}></Route>
                    <Route path={routes.about} element={<About />}></Route>
                </Routes>
                </main>
            </div>
        </BrowserRouter>
        </ThemeContext.Provider>
    )
}
export default App
