const ToDoNew = (props) => {
    const {addNewTodo} = props;
    // addNewTodo("Eric");
    const handleClick = () => {
        alert("Click me!");
    }
    const handleOnChange = (name) => {
        console.log(">>>>>>>> handleOnChange", name);
    }
    return (
        <div className={"todo-new"}>
            <input
                type={"text"}
                placeholder={"Enter your task"}
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >
                Add
            </button>
        </div>
    )
}
export default ToDoNew;