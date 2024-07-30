import Post from "./Post.jsx";
function ItemList(props) {
    const {items, deleteItem} = props;
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <Post onDelete={() => deleteItem(index)}  key={index} text={item.postText} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;