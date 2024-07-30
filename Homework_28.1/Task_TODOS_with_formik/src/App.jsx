import './index.css'
import {Container} from "@mui/material";
import Header from "./components/Header.jsx";
import SearchForm from "./components/SearchForm.jsx";
import {useState} from "react";
import ItemList from "./components/ItemList.jsx";

function App()  {
    const [items, setItems] = useState([]);

    const onSubmit = (value) => {
        setItems([...items, value]);

    };
    const deleteItem = (indexToDelete) => {
        setItems(items.filter((item,index) => index !== indexToDelete));
    };

        return (
            <Container maxWidth="lg">
                <Header />
                    <SearchForm onSubmit={onSubmit}/>
                <ItemList items={items} deleteItem={deleteItem}/>
            </Container>
        )
    }
export default App