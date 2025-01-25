const ToDoNew = (props) => {
    const {addNewTodo} = props;
    addNewTodo("Eric");
    return (
        <div className={"todo-new"}>
            <input type={"text"} placeholder={"Enter your task"}/>
            <button>Add</button>
        </div>
    )
}
export default ToDoNew;